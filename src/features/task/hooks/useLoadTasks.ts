import { Task } from '../interface/Task';
import { tasksState } from '../srtores/atom/taskAtom';
import { useRecoilState } from 'recoil';

export const useLoadTasks = () => {
  const [,setTasks] = useRecoilState(tasksState);

  const loadTasks = () => {
    const tasksString = localStorage.getItem('tasks');
    let loadedTasks = tasksString ? JSON.parse(tasksString) as Task[] : [];
    // 各タスクの `created` を Date オブジェクトに変換
    loadedTasks.forEach(task => {
      task.created = new Date(task.created);
    });
    // タスクを `created` の降順にソート
    loadedTasks = loadedTasks.sort((a, b) => b.created.getTime() - a.created.getTime());
    setTasks(loadedTasks);
  };

  return loadTasks;
};