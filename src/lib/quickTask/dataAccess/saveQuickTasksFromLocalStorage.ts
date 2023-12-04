import { QuickTask } from "../interface/QuickTask";

export const saveQuickTasksFromLocalStorage = (updateQuickTasks:QuickTask[]) =>{
  try{
    localStorage.setItem("quickTasks", JSON.stringify(updateQuickTasks));
  }catch (error){
    console.error('Failed to save tasks to localStorage', error);
  }
}