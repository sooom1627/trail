import { useRecoilState } from 'recoil';
import { tasksState } from '../srtores/atom/taskAtom';
import { Task } from "../interface/Task";

export const useHandleTaskExecution = (status: "doing" | "done") => {  
  const [,setTasks] = useRecoilState(tasksState);

  const handleTaskExecution= (taskId:string) =>{
      const tasksString = localStorage.getItem('tasks');
      const currentTasks = tasksString ? JSON.parse(tasksString).map((task: any) => ({
        ...task,
        created: new Date(task.created)
      })) as Task[] : [];

      let updatedTasks = currentTasks.map(t => {
        if (t.id === taskId) {
          return { ...t, status: status as "doing" | "todo" | "done" };
        }
        return t;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      
      updatedTasks = updatedTasks.sort((a, b) => b.created.getTime() - a.created.getTime());
      setTasks(updatedTasks);
    }
  return handleTaskExecution
};