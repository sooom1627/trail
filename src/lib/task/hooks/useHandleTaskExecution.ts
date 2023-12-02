import { useRecoilState } from 'recoil';
import { tasksState, selectedTasksState } from '../srtores/atom/taskAtom';
import { Task } from "../interface/Task";

const parseTasksFromLocalStorage = (): Task[] => {
  const tasksString = localStorage.getItem('tasks');
  return tasksString ? JSON.parse(tasksString).map((task: any) => ({
    ...task,
    created: new Date(task.created),
    startTime: task.startTime ? new Date(task.startTime) : undefined,
    endTime: task.endTime ? new Date(task.endTime): undefined
  })) : [];
};

const updateTaskStatus = (task: Task, status: "doing" | "done", selectedTask: Task, setSelectedTask: Function) => {
  const updatedTask = { ...task, status: status as "doing" | "todo" | "done" };
  setSelectedTask({...selectedTask, status:status, id: selectedTask?.id});
  if (status === "doing") {
    updatedTask.startTime = new Date();
  } else if (status === "done") {
    updatedTask.endTime = new Date();
  }
  return updatedTask;
};

export const useHandleTaskExecution = (status: "doing" | "done") => {  
  const [,setTasks] = useRecoilState(tasksState);
  const [selectedTask, setSelectedTask] = useRecoilState(selectedTasksState)

  const handleTaskExecution= (taskId:string) =>{
    if(selectedTask){
      const currentTasks = parseTasksFromLocalStorage();

      let updatedTasks = currentTasks.map(t => {
        if (t.id === taskId) {
          return updateTaskStatus(t, status, selectedTask, setSelectedTask);
        }
        return t;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      
      updatedTasks = updatedTasks.sort((a, b) => b.created.getTime() - a.created.getTime());
      setTasks(updatedTasks);
    }
  }
  return handleTaskExecution
};