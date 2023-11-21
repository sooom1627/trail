import { useRecoilState } from 'recoil';
import { tasksState } from '../../../stores/atom/task';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../interface/Task';


export const useSaveTask = () => {
  const [, setTasks] = useRecoilState(tasksState);

  const saveTask = (title: string) => {
    const tasksString = localStorage.getItem('tasks');
    const currentTasks = tasksString ? JSON.parse(tasksString) as Task[] : [];

    const newTask: Task = {
      id: uuidv4(),
      title,
      created: new Date()
    };
    const updatedTasks = [...currentTasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return saveTask;
};



