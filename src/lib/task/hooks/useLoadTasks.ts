import { getTasksFromLocalStorage } from '../dataAccess/ getTasksFromLocalStorage';
import { Task } from '../interface/Task';
import { selectedTasksState, tasksState } from '../srtores/atom/taskAtom';
import { useRecoilState } from 'recoil';


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
    let loadedTasks = getTasksFromLocalStorage()
    loadedTasks = sortTasksByCreated(loadedTasks);

    if (!selectedTask) {
      selectLatestTodoTask(loadedTasks, setSelectedTask);
    }

    setTasks(loadedTasks);
  };

  return [tasks, loadTasks];
};