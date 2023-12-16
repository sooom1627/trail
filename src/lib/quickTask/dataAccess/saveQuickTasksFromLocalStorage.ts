import { QuickTask } from "../interface/QuickTask";
import { autoRemoveQuickTask } from "../util/removeQuickTask";

export const saveQuickTasksFromLocalStorage = (updateQuickTasks:QuickTask[]) =>{
  try{
    const removedQuickTask = autoRemoveQuickTask(updateQuickTasks)
    localStorage.setItem("quickTasks", JSON.stringify(removedQuickTask));
  }catch (error){
    console.error('Failed to save tasks to localStorage', error);
  }
}