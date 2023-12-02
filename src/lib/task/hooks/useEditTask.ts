import { useRecoilState } from 'recoil';
import { tasksState, selectedTasksState } from '../srtores/atom/taskAtom';
import { Task } from '../interface/Task';
import { getTasksFromLocalStorage } from '../dataAccess/ getTasksFromLocalStorage';
import { saveTasksToLocalStorage } from '../dataAccess/saveTasksToLocalStorage';
import { sortAndSetTasksToGlobalState } from '../utils/sortAndSetTasksToGlobalState';

interface useEditTaskProps{
  taskId:string
  title:string,
  priority:"Lowest"| "Low"| "Middle" | "High"| "Highest"
}

export const useEditTask = ({taskId, title, priority}: useEditTaskProps) => {
  const [, setTasks] = useRecoilState(tasksState);
  const [, setSelectedTask] = useRecoilState(selectedTasksState);

  const updateTask = (task: Task) => {
    if (task.id === taskId) {
      setSelectedTask({ ...task, title: title, priority: priority });
      return { ...task, title: title, priority: priority };
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