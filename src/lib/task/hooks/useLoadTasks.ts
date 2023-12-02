import { Task } from '../interface/Task';
import { selectedTasksState, tasksState } from '../srtores/atom/taskAtom';
import { useRecoilState } from 'recoil';

const convertTaskDates = (tasks: Task[]): Task[] => {
  return tasks.map(task => ({
    ...task,
    created: new Date(task.created),
    startTime: task.startTime ? new Date(task.startTime) : undefined,
    endTime: task.endTime ? new Date(task.endTime) : undefined,
  }));
};

const sortTasksByCreated = (tasks: Task[]): Task[] => {
  return tasks.sort((a, b) => b.created.getTime() - a.created.getTime());
};

const selectLatestTodoTask = (tasks: Task[], setSelectedTask: (task: Task) => void): void => {
  const latestTodoTask = tasks.find(task => task.status === 'todo');
  if (latestTodoTask) {
    setSelectedTask(latestTodoTask);
  }
};

export const useLoadTasks = (): [Task[], () => void] => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [selectedTask, setSelectedTask] = useRecoilState(selectedTasksState);

  const loadTasks = () => {
    let loadedTasks: Task[] = [];
    try {
      const tasksString = localStorage.getItem('tasks');
      loadedTasks = tasksString ? JSON.parse(tasksString) : [];
    } catch (error) {
      console.error('Failed to parse tasks from localStorage', error);
    }

    loadedTasks = convertTaskDates(loadedTasks);
    loadedTasks = sortTasksByCreated(loadedTasks);

    if (!selectedTask) {
      selectLatestTodoTask(loadedTasks, setSelectedTask);
    }

    setTasks(loadedTasks);
  };

  return [tasks, loadTasks];
};