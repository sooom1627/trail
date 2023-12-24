import { Task } from "@/lib/task/interface/Task";
import { calculateTotalElapsedTime } from "./calculateTotalElapsedTime";

const SHOWDAYS = 6

export const transformTasksToChartData = (tasks: Task[]): { name: string, data: { x: string, y: number }[] }[] => {
  const chartData: { name: string, data: { x: string, y: number }[] }[] = [];
  const groupedTasks: Record<string, Task[]> = {};

  tasks.forEach(task => {
    if (task.endTime) {
      const tag = task.tag || 'undefined';
      if (!groupedTasks[tag]) {
        groupedTasks[tag] = [];
      }
      groupedTasks[tag].push(task);
    }
  });

  for (const tag in groupedTasks) {
    const data: { x: string, y: number }[] = [];
    for (let i = SHOWDAYS; i >= 0; i--) {
      const tasksOnDate = groupedTasks[tag].filter(task => {
        const taskDateKey = task.endTime?.toISOString().split('T')[0];
        const currentDateKey = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        return taskDateKey === currentDateKey;
      });
      const totalDurationOnDate = calculateTotalElapsedTime(tasksOnDate);
      const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
      data.push({ x: formattedDate, y: totalDurationOnDate });
    }
    chartData.push({ name: tag, data });
  }

  return chartData;
}