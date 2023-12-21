import { Task } from "@/lib/task/interface/Task";

export const filterTasksCompletedInLast7Days = (tasks:Task[]) =>{
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return tasks.filter(task => task.endTime && task.endTime >= oneWeekAgo);
}