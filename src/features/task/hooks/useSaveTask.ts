import { useRecoilState } from 'recoil';
import { tasksState } from '../srtores/atom/task';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../interface/Task';


export const useSaveTask = () => {
  const [, setTasks] = useRecoilState(tasksState);

  const saveTask = (title: string) => {
    const tasksString = localStorage.getItem('tasks');
    const currentTasks = tasksString ? JSON.parse(tasksString).map((task: any) => ({
      ...task,
      created: new Date(task.created)
    })) as Task[] : [];

    const newTask: Task = {
      id: uuidv4(),
      title,
      priority:"middle",
      created: new Date()
    };
    let updatedTasks = [...currentTasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
    updatedTasks = updatedTasks.sort((a, b) => b.created.getTime() - a.created.getTime());
    setTasks(updatedTasks);
  };

  return saveTask;
};



