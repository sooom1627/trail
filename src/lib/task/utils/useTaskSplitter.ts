import { useState, useEffect } from 'react';
import { Task } from '@/lib/task/interface/Task';

export const taskSplitter = (tasks: Task[], sorting:"date"|"priority") => {
  const [todoTasks, setTodoTasks] = useState<Task[]>([]);
  const [doingTasks, setDoingTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const priorityMapping = {
    "Lowest": 1,
    "Low": 2,
    "Middle": 3,
    "High": 4,
    "Highest": 5
  };

  const compareTasksByPriority = (a: Task, b: Task) => {
    return priorityMapping[b.priority] - priorityMapping[a.priority];
  };

  useEffect(() => {
    if(sorting === "date"){
      setTodoTasks(tasks.filter(task => task.status === 'todo'));
    }else if(sorting === "priority"){
      setTodoTasks(tasks.filter(task => task.status === 'todo').sort(compareTasksByPriority));
    }    
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
  }, [tasks, sorting]);

  return { todoTasks, doingTasks, doneTasks };
};