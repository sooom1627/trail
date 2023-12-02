import { useRecoilState } from 'recoil';
import { tasksState, selectedTasksState } from '../srtores/atom/taskAtom';
import { Task } from '../interface/Task';

const getTasksFromLocalStorage = (): Task[] => {
  const tasksString = localStorage.getItem('tasks');
  return tasksString ? JSON.parse(tasksString).map((task: any) => ({
    ...task,
    created: new Date(task.created),
    startTime: task.startTime ? new Date(task.startTime) : undefined,
    endTime: task.endTime ? new Date(task.endTime): undefined
  })) as Task[] : [];
};

export const useDeleteTask = (taskId:String) => {
  const [, setTasks] = useRecoilState(tasksState);
  const [selectedTask, setSelectedTask] = useRecoilState(selectedTasksState);

  const deleteTask = () => {
    let currentTasks = getTasksFromLocalStorage();
    let updatedTasks = currentTasks.filter((task: Task) => task.id !== taskId);
    
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    updatedTasks = updatedTasks.sort((a, b) => b.created.getTime() - a.created.getTime());
    setTasks(updatedTasks);

    if(selectedTask?.id === taskId){
      setSelectedTask(null)
    }
  };

  return deleteTask;
};