import { useState, useEffect } from 'react';
import { Task } from 'src/features/task/interface/Task';

export const useTaskSplitter = (tasks: Task[]) => {
  const [todoTasks, setTodoTasks] = useState<Task[]>([]);
  const [doingTasks, setDoingTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTodoTasks(tasks.filter(task => task.status === 'todo'));
    setDoingTasks(tasks.filter(task => task.status === 'doing').sort((a, b) => ((b.startTime || 0) as number) - ((a.startTime || 0) as number)));
    setDoneTasks(tasks.filter(task => task.status === 'done').sort((a, b) => ((b.endTime || 0) as number) - ((a.endTime || 0) as number)));
  }, [tasks]);

  return { todoTasks, doingTasks, doneTasks };
};