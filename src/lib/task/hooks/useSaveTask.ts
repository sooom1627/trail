import { useRecoilState } from 'recoil';
import { tasksState } from '../stores/task/taskAtom';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../interface/Task';
import { getTasksFromLocalStorage } from '../dataAccess/getTasksFromLocalStorage';
import { saveTasksToLocalStorage } from '../dataAccess/saveTasksToLocalStorage';
import { sortAndSetTasksToGlobalState } from '../utils/sortAndSetTasksToGlobalState';


export const useSaveTask = () => {
  const [, setTasks] = useRecoilState(tasksState);

  const saveTask = (title: string) => {
    const currentTasks = getTasksFromLocalStorage();
    
    const newTask: Task = {
      id: uuidv4(),
      title,
      priority:"Middle",
      status :"todo",
      created: new Date()
    };
    
    let updatedTasks = [...currentTasks, newTask];
    saveTasksToLocalStorage(updatedTasks);
    sortAndSetTasksToGlobalState(updatedTasks,setTasks)
  };

  return saveTask;
};