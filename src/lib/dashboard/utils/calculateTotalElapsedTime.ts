import { Task } from "@/lib/task/interface/Task";

export const calculateTotalElapsedTime = (tasks: Task[]): number => {
  return tasks.reduce((total, task) => {
    if (task.startTime && task.endTime) {
      let elapsedTimeInMinutes = Math.floor((task.endTime.getTime() - task.startTime.getTime()) / 60000);

      // pauses配列が存在し、その中に要素がある場合、それらの時間を差し引く
      if (task.pauses && task.pauses.length > 0) {
        task.pauses.forEach(pause => {
          if (pause.pause && pause.restart) {
            const pauseTimeInMinutes = Math.floor((pause.restart.getTime() - pause.pause.getTime()) / 60000);
            elapsedTimeInMinutes -= pauseTimeInMinutes;
          }
        });
      }

      return total + elapsedTimeInMinutes;
    }
    return total;
  }, 0);
}