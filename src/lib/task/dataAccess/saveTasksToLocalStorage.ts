import { Task } from "../interface/Task";

// src/lib/task/helpers.ts
export const saveTasksToLocalStorage = (tasks: Task[]) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to localStorage', error);
  }
};