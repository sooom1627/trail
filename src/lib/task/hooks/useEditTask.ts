import { useRecoilState } from 'recoil';
import { tasksState, selectedTasksState } from '../stores/task/taskAtom';
import { Task } from '../interface/Task';
import { getTasksFromLocalStorage } from '../dataAccess/getTasksFromLocalStorage';
import { saveTasksToLocalStorage } from '../dataAccess/saveTasksToLocalStorage';
import { sortAndSetTasksToGlobalState } from '../utils/sortAndSetTasksToGlobalState';

interface useEditTaskProps{
  taskId:string
  title:string,
  priority:"Lowest"| "Low"| "Middle" | "High"| "Highest",
  tag:string | undefined
}

export const useEditTask = ({taskId, title, priority, tag}: useEditTaskProps) => {
  const [, setTasks] = useRecoilState(tasksState);
  const [, setSelectedTask] = useRecoilState(selectedTasksState);

  const updateTask = (task: Task) => {
    if (task.id === taskId) {
      setSelectedTask({ ...task, title: title, priority: priority, tag: tag });
      return { ...task, title: title, priority: priority, tag: tag };
    }
    return task;
  };

  const editTask = () => {
    let currentTasks = getTasksFromLocalStorage();
    
    const updatedTasks = currentTasks.map(updateTask);
    saveTasksToLocalStorage(updatedTasks);
    sortAndSetTasksToGlobalState(updatedTasks,setTasks)
  };

  return editTask;
};