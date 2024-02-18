import { Task } from "../interface/Task";

export const getTasksFromLocalStorage = (): Task[] => {
  const tasksString = localStorage.getItem('tasks');
  try {
    return tasksString ? JSON.parse(tasksString).map((task:Task) => ({
      ...task,
      created: new Date(task.created),
      deadLine:task.deadLine? new Date(task.deadLine): undefined,
      startTime: task.startTime ? new Date(task.startTime) : undefined,
      endTime: task.endTime ? new Date(task.endTime) : undefined,
      pauses: Array.isArray(task.pauses) ? task.pauses.map((pause) => ({
        pause: new Date(pause.pause),
        restart: pause.restart ? new Date(pause.restart) : undefined,
      })) : undefined
    })) as Task[] : [];
  } catch (error) {
    console.error('Failed to parse tasks from localStorage', error);
    return [];
  }
};