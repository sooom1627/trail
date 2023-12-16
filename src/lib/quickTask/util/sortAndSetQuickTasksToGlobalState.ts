import { QuickTask } from "../interface/QuickTask";
import { autoRemoveQuickTask } from "./removeQuickTask";

export const sortAndSetQuickTasksToGlobalState = (
  updateQuickTasks:QuickTask[],
  setQuickTasks: Function,
) =>{
  updateQuickTasks = updateQuickTasks.sort(
    (a, b) => b.created.getTime() - a.created.getTime()
  );
  const removedQuickTask = autoRemoveQuickTask(updateQuickTasks)
  setQuickTasks(removedQuickTask);
}