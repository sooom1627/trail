import { Task } from '../interface/Task';
import { selectedTasksState, tasksState } from '../srtores/atom/taskAtom';
import { useRecoilState } from 'recoil';

export const useLoadTasks = (): [Task[], () => void] => {
  const [tasks,setTasks] = useRecoilState(tasksState);
  const[selectedTask, setSelectedTask] = useRecoilState(selectedTasksState)

  const loadTasks = () => {
    const tasksString = localStorage.getItem('tasks');
    let loadedTasks = tasksString ? JSON.parse(tasksString) as Task[] : [];
    // 各タスクの `created` を Date オブジェクトに変換
    loadedTasks.forEach(task => {
      task.created = new Date(task.created);
      task.startTime = task.startTime ? new Date(task.startTime) : undefined;
      task.endTime = task.endTime ? new Date(task.endTime) : undefined;
    });
    // タスクを `created` の降順にソート
    loadedTasks = loadedTasks.sort((a, b) => b.created.getTime() - a.created.getTime());
    if(!selectedTask){
      const latestTodoTask = loadedTasks.filter(task => task.status === 'todo')
      setSelectedTask(latestTodoTask[0])
    }
    setTasks(loadedTasks);
  };

  return [tasks,loadTasks];
};