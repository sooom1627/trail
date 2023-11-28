import { useState, useEffect } from 'react';
import { Task } from '@/lib/task/interface/Task';

export const taskSplitter = (tasks: Task[]) => {
  const [todoTasks, setTodoTasks] = useState<Task[]>([]);
  const [doingTasks, setDoingTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTodoTasks(tasks.filter(task => task.status === 'todo'));
    setDoingTasks(tasks.filter(task => task.status === 'doing').sort((a, b) => ((b.startTime || 0) as number) - ((a.startTime || 0) as number)));
    setDoneTasks(tasks.filter(task => {
      if (task.status !== 'done' || !task.endTime) {
        return false;
      }
    
      const taskDate = new Date(task.endTime);
      const today = new Date();
    
      return taskDate.getDate() === today.getDate() &&
        taskDate.getMonth() === today.getMonth() &&
        taskDate.getFullYear() === today.getFullYear();
    }).sort((a, b) => ((b.endTime || 0) as number) - ((a.endTime || 0) as number)));
  }, [tasks]);

  return { todoTasks, doingTasks, doneTasks };
};