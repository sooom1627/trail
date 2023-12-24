import { Task } from "@/lib/task/interface/Task";
import { calculateTotalElapsedTime } from "./calculateTotalElapsedTime";
import { getTagNameById } from "./getTagNamebyID";
import { Tag } from "@/lib/tag/interface/Tag";

const SHOWDAYS = 6

export const transformTasksToChartData = (tasks: Task[], tags: Tag[]): [
  { name: string, data: { x: string, y: number }[] }[], 
  string[]
] => {
  const chartData: { name: string, data: { x: string, y: number }[] }[] = [];
  const colorData: Set<string> = new Set();
  const groupedTasks: Record<string, Task[]> = {};

  tasks.forEach(task => {
    if (task.endTime) {
      const [tag, tagColor] = task.tag ? getTagNameById(task.tag, tags) : ["undefind", "#a1a1aa"]; 
      if (tagColor) {
        colorData.add(tagColor);
      }
      if (!groupedTasks[tag]) {
        groupedTasks[tag] = [];
      }
      groupedTasks[tag].push(task);
    }
  });

  for (const tag in groupedTasks) {
    const data: { x: string, y: number }[] = [];
    const today = new Date()
    for (let i = SHOWDAYS; i >= 0; i--) {
      const tasksOnDate = groupedTasks[tag].filter(task => {
        if (task.endTime) {
          const taskDateKey = new Date(task.endTime.getTime() + 9 * 60 * 60 * 1000).toISOString().split('T')[0];
          const currentDateKey = new Date(today.getTime() - i * 24 * 60 * 60 * 1000 + 9 * 60 * 60 * 1000).toISOString().split('T')[0];
          return taskDateKey === currentDateKey;
        }
        return false;
      });
      const totalDurationOnDate = calculateTotalElapsedTime(tasksOnDate);
      const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
      data.push({ x: formattedDate, y: totalDurationOnDate });
    }
    chartData.push({ name: tag, data });
  }
  
  return [chartData, Array.from(colorData)];
}