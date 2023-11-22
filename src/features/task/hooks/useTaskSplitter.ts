import { useState, useEffect } from 'react';
import { Task } from 'src/features/task/interface/Task';

export const useTaskSplitter = (tasks: Task[]) => {
  const [todoTasks, setTodoTasks] = useState<Task[]>([]);
  const [doingTasks, setDoingTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTodoTasks(tasks.filter(task => task.status === 'todo'));
    setDoingTasks(tasks.filter(task => task.status === 'doing'));
    setDoneTasks(tasks.filter(task => task.status === 'done'));
  }, [tasks]);

  return { todoTasks, doingTasks, doneTasks };
};