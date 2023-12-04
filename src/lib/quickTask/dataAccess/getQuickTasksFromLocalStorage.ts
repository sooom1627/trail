import { QuickTask } from "../interface/QuickTask";

export const  getQuickTasksFromLocalStorage = () :QuickTask[] =>{
  const quickTaskString = localStorage.getItem("quickTasks");
  try{
    const currentQuickTasks = quickTaskString
    ? (JSON.parse(quickTaskString).map((task: QuickTask) => ({
        ...task,
        created: new Date(task.created),
      })) as QuickTask[])
    : [];
    return currentQuickTasks
  }catch (error){
    console.error('Failed to parse tasks from localStorage', error);
    return [];
  }
}