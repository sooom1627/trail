import { useRecoilState } from 'recoil';
import { tasksState,selectedTasksState } from '../srtores/atom/taskAtom';
import { Task } from "../interface/Task";
import { saveTasksToLocalStorage } from '../dataAccess/saveTasksToLocalStorage';
import { sortAndSetTasksToGlobalState } from '../utils/sortAndSetTasksToGlobalState';

export const useHandleTaskExecution = (status: "doing" | "done") => {  
  const [,setTasks] = useRecoilState(tasksState);
  const [selectedTask, setSelectedTask] = useRecoilState(selectedTasksState)

  const handleTaskExecution= (taskId:string) =>{
    if(selectedTask){
      const tasksString = localStorage.getItem('tasks');
      const currentTasks = tasksString ? JSON.parse(tasksString).map((task: any) => ({
        ...task,
        created: new Date(task.created),
        startTime: task.startTime ? new Date(task.startTime) : undefined,
        endTime: task.endTime ? new Date(task.endTime): undefined
      })) as Task[] : [];

      let updatedTasks = currentTasks.map(t => {
        if (t.id === taskId) {
          switch(status){
            case "doing":
              setSelectedTask({...selectedTask, status:status, id: selectedTask?.id, startTime:new Date()})
              return { ...t, status: status as "doing" | "todo" | "done", startTime:new Date() };
            case "done":
              setSelectedTask({...selectedTask, status:status, id: selectedTask?.id, endTime:new Date()})
              return { ...t, status: status as "doing" | "todo" | "done", endTime:new Date() };
          }
        }
        return t;
      });
      saveTasksToLocalStorage(updatedTasks)
      sortAndSetTasksToGlobalState(updatedTasks,setTasks)
    }

    }
  return handleTaskExecution
};