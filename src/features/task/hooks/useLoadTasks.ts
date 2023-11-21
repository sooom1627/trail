import { Task } from '../interface/Task';
import { tasksState } from '../../../stores/atom/task';
import { useRecoilState } from 'recoil';

export const useLoadTasks = () => {
  const [,setTasks] = useRecoilState(tasksState);

  const loadTasks = () => {
    const tasksString = localStorage.getItem('tasks');
    const loadedTasks = tasksString ? JSON.parse(tasksString) as Task[] : [];
    // 各タスクの `created` を Date オブジェクトに変換
    loadedTasks.forEach(task => {
      task.created = new Date(task.created);
    });
    setTasks(loadedTasks);
  };

  return loadTasks;
};