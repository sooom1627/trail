import { Task } from "@/lib/task/interface/Task";

export const calculateTotalElapsedTime = (tasks: Task[]): number => {
  return tasks.reduce((total, task) => {
    if (task.startTime && task.endTime) {
      const elapsedTimeInMinutes = Math.floor((task.endTime.getTime() - task.startTime.getTime()) / 60000);
      return total + elapsedTimeInMinutes;
    }
    return total;
  }, 0);
}