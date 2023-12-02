import { useRecoilState } from 'recoil';
import { tasksState } from '../srtores/atom/taskAtom';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../interface/Task';

const getTasksFromLocalStorage = (): Task[] => {
  const tasksString = localStorage.getItem('tasks');
  try {
    return tasksString ? JSON.parse(tasksString).map((task:Task) => ({
      ...task,
      created: new Date(task.created),
      startTime: task.startTime ? new Date(task.startTime) : undefined,
      endTime: task.endTime ? new Date(task.endTime): undefined
    })) as Task[] : [];
  } catch (error) {
    console.error('Failed to parse tasks from localStorage', error);
    return [];
  }
};

const saveTasksToLocalStorage = (tasks: Task[]) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to localStorage', error);
  }
};

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
    
    updatedTasks = updatedTasks.sort((a, b) => b.created.getTime() - a.created.getTime());
    setTasks(updatedTasks);
  };

  return saveTask;
};