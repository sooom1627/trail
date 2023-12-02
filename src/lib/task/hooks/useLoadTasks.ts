import { getTasksFromLocalStorage } from '../dataAccess/ getTasksFromLocalStorage';
import { Task } from '../interface/Task';
import { selectedTasksState, tasksState } from '../srtores/atom/taskAtom';
import { useRecoilState } from 'recoil';
import { sortAndSetTasksToGlobalState } from '../utils/sortAndSetTasksToGlobalState';


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

    if (!selectedTask) {
      selectLatestTodoTask(loadedTasks, setSelectedTask);
    }

    sortAndSetTasksToGlobalState(loadedTasks,setTasks)
  };

  return [tasks, loadTasks];
};