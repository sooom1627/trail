import { useRecoilState } from 'recoil';
import { tasksState, selectedTasksState } from '../stores/task/taskAtom';
import { Task } from '../interface/Task';
import { getTasksFromLocalStorage } from '../dataAccess/ getTasksFromLocalStorage';
import { saveTasksToLocalStorage } from '../dataAccess/saveTasksToLocalStorage';
import { sortAndSetTasksToGlobalState } from '../utils/sortAndSetTasksToGlobalState';


export const useDeleteTask = (taskId:String) => {
  const [, setTasks] = useRecoilState(tasksState);
  const [selectedTask, setSelectedTask] = useRecoilState(selectedTasksState);

  const deleteTask = () => {
    let currentTasks = getTasksFromLocalStorage();
    let updatedTasks = currentTasks.filter((task: Task) => task.id !== taskId);
    
    saveTasksToLocalStorage(updatedTasks)
    sortAndSetTasksToGlobalState(updatedTasks,setTasks)

    if(selectedTask?.id === taskId){
      setSelectedTask(null)
    }
  };

  return deleteTask;
};