import { QuickTask } from "../interface/QuickTask";

export const autoRemoveQuickTask = (quickTasks: QuickTask[]) => {
  const now = new Date();
  return quickTasks.filter(quickTask => quickTask.ended == null || (now.getTime() - new Date(quickTask.ended).getTime()) < 24 * 60 * 60 * 1000);
}