import { Task } from "@/lib/task/interface/Task";

export const groupTasksByTag = (tasks: Task[]): Record<string, Task[]> =>{
  return tasks.reduce((acc, task) => {
    const tag = task.tag || 'undefined';
    if (!acc[tag]) {
      acc[tag] = [];
    }
    acc[tag].push(task);
    return acc;
  }, {} as Record<string, Task[]>);
}