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
  const [selectedTask, setSelectedTask] = useRecoilState(selectedTasksState);

  const saveTask = () => {
    const tasksString = localStorage.getItem('tasks');
    const currentTasks = tasksString ? JSON.parse(tasksString).map((task: any) => ({
      ...task,
      created: new Date(task.created),
      startTime: task.startTime ? new Date(task.startTime) : undefined,
      endTime: task.endTime ? new Date(task.endTime): undefined
    })) as Task[] : [];
    
    let updatedTasks = currentTasks.map((task: Task) => {
      if (task.id === taskId) {
        if(selectedTask){
          selectedTask.id === taskId && setSelectedTask({ ...task, title: title, priority: priority })
        }
        return { ...task, title: title, priority: priority };
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
    updatedTasks = updatedTasks.sort((a, b) => b.created.getTime() - a.created.getTime());
    setTasks(updatedTasks);
  };

  return saveTask;
};



