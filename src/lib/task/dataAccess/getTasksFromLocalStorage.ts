import { Task } from "../interface/Task";

// src/lib/task/helpers.ts
export const getTasksFromLocalStorage = (): Task[] => {
  const tasksString = localStorage.getItem('tasks');
  try {
    return tasksString ? JSON.parse(tasksString).map((task:Task) => ({
      ...task,
      created: new Date(task.created),
      startTime: task.startTime ? new Date(task.startTime) : undefined,
      endTime: task.endTime ? new Date(task.endTime): undefined
    })) as Task[] : [];
  } catch (error) {
    console.error('Failed to parse tasks from localStorage', error);
    return [];
  }
};