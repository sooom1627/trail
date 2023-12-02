import { useRecoilState } from 'recoil';
import { tasksState, selectedTasksState } from '../srtores/atom/taskAtom';
import { Task } from '../interface/Task';

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

  const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const editTask = () => {
    const tasksString = localStorage.getItem('tasks');
    const currentTasks = tasksString ? JSON.parse(tasksString).map((task: any) => ({
      ...task,
      created: new Date(task.created),
      startTime: task.startTime ? new Date(task.startTime) : undefined,
      endTime: task.endTime ? new Date(task.endTime): undefined
    })) as Task[] : [];
    
    const updatedTasks = currentTasks.map(updateTask);
    saveTasksToLocalStorage(updatedTasks);
    
    updatedTasks.sort((a, b) => b.created.getTime() - a.created.getTime());
    setTasks(updatedTasks);
  };

  return editTask;
};