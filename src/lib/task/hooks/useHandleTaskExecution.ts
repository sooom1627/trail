import { useRecoilState } from 'recoil';
import { tasksState,selectedTasksState } from '../stores/task/taskAtom';
import { saveTasksToLocalStorage } from '../dataAccess/saveTasksToLocalStorage';
import { sortAndSetTasksToGlobalState } from '../utils/sortAndSetTasksToGlobalState';
import { getTasksFromLocalStorage } from '../dataAccess/getTasksFromLocalStorage';

export const useHandleTaskExecution = (status: "doing" | "pause" | "done") => {  
  const [,setTasks] = useRecoilState(tasksState);
  const [selectedTask, setSelectedTask] = useRecoilState(selectedTasksState)

  const handleTaskExecution= (taskId:string) =>{
    if(selectedTask){
      const currentTasks = getTasksFromLocalStorage();

      let updatedTasks = currentTasks.map(t => {
        if (t.id === taskId) {
          switch(status){
            case "doing":
              if(selectedTask.status === "pause"){
                setSelectedTask({ ...t, status: status as "todo" | "doing" | "pause" | "done", pauses:(t.pauses ? [...t.pauses.slice(0, -1), {...t.pauses[t.pauses.length - 1], restart: new Date()}] : [{pause:new Date(), restart:new Date()}]) })
                return { ...t, status: status as "todo" | "doing" | "pause" | "done", pauses:(t.pauses ? [...t.pauses.slice(0, -1), {...t.pauses[t.pauses.length - 1], restart: new Date()}] : [{pause:new Date(), restart:new Date()}]) };
              }else{
                setSelectedTask({...selectedTask, status:status, id: selectedTask?.id, startTime:new Date()})
                return { ...t, status: status as "todo" | "doing" | "pause" | "done", startTime:new Date() };
              }
            case "pause":
              setSelectedTask({ ...t, status: status as "todo" | "doing" | "pause" | "done", pauses:(t.pauses ? [...t.pauses, {pause:new Date(), restart:undefined}] : [{pause:new Date(), restart:undefined}]) })
              return { ...t, status: status as "todo" | "doing" | "pause" | "done", pauses:(t.pauses ? [...t.pauses, {pause:new Date(), restart:undefined}] : [{pause:new Date(), restart:undefined}]) };
            case "done":
              setSelectedTask({...selectedTask, status:status, id: selectedTask?.id, endTime:new Date()})
              return { ...t, status: status as "todo" | "doing" | "pause" | "done", endTime:new Date() };
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