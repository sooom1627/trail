import { QuickTask } from "../interface/QuickTask";

export const sortAndSetQuickTasksToGlobalState = (
  updateQuickTasks:QuickTask[],
  setQuickTasks: Function,
) =>{
  updateQuickTasks = updateQuickTasks.sort(
    (a, b) => b.created.getTime() - a.created.getTime()
  );
  setQuickTasks(updateQuickTasks);
}