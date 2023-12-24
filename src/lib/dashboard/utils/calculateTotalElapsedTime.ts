import { Task } from "@/lib/task/interface/Task";

export const calculateTotalElapsedTime = (tasks: Task[]): number => {
  return tasks.reduce((total, task) => {
    if (task.startTime && task.endTime) {
      let elapsedTimeInMilliseconds = task.endTime.getTime() - task.startTime.getTime();

      if (task.pauses && task.pauses.length > 0) {
        task.pauses.forEach(pause => {
          if (pause.pause && pause.restart) {
            const pauseTimeInMilliseconds = pause.restart.getTime() - pause.pause.getTime();
            elapsedTimeInMilliseconds -= pauseTimeInMilliseconds;
          }
        });
      }

      const elapsedTimeInMinutes = Math.floor(elapsedTimeInMilliseconds / 60000);
      return total + elapsedTimeInMinutes;
    }
    return total;
  }, 0);
}