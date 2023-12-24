import { Task } from "@/lib/task/interface/Task";

const SHOWDAYS = 6

export const filterTasksCompletedInLast7Days = (tasks:Task[]) =>{
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - SHOWDAYS);

  return tasks.filter(task => task.endTime && task.endTime >= oneWeekAgo);
}