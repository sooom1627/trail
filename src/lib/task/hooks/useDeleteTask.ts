import { useRecoilState } from 'recoil';
import { tasksState, selectedTasksState } from '../srtores/atom/taskAtom';
import { Task } from '../interface/Task';
import { getTasksFromLocalStorage } from '../dataAccess/ getTasksFromLocalStorage';


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