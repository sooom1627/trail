import { ExecutionTime } from "../interface/ExecutionTime";
import { Task } from "../interface/Task";

const calcDiffExecutionTime = (diff:number) =>{
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const hoursStr = hours.toString().padStart(2, "0");
	const minutesStr = minutes.toString().padStart(2, "0");
	const secondsStr = seconds.toString().padStart(2, "0");

	return { hoursStr, minutesStr, secondsStr };
}

export const getDoneTaskExecutionTime = (startTime:Date, endTime:Date) =>{
  const diff = endTime.getTime() - startTime.getTime();
  const executionTime =  calcDiffExecutionTime(diff)
  return executionTime
}

export const getDoingTaskExecutionTime = (startTime: Date, pauses?:{pause:Date, restart?:Date}[]) =>{
  const now = new Date();
  const diff = now.getTime() - startTime.getTime();
  const executionTime =  calcDiffExecutionTime(diff)
  return executionTime
}

export const getTimerTaskExecutionTime = (selectedTask: Task, setExecutionTime: React.Dispatch<React.SetStateAction<ExecutionTime>>) => {
	let timerId: ReturnType<typeof setTimeout> | null = null;

	if (selectedTask.status === "todo") {
		setExecutionTime({
			hoursStr: "00",
			minutesStr: "00",
			secondsStr: "00",
		});
		return timerId;
	}

	if (selectedTask.status === "doing") {
		timerId = setInterval(() => {
			const result = selectedTask.startTime
				? getDoingTaskExecutionTime(selectedTask.startTime)
				: null;
			if (result) {
				setExecutionTime(result);
			}
		}, 1000);

		return timerId
	}

	if (selectedTask?.startTime && selectedTask?.endTime) {
		const result = getDoneTaskExecutionTime(
			selectedTask.startTime,
			selectedTask.endTime
		);
		setExecutionTime(result);
		return timerId;
	}

	return timerId;
};

export const getTodayDoneTaskExecutionTime = (tasks:Task[]) =>{
	let totalDiff = 0;

	tasks.forEach((task) =>{
		if(task.startTime && task.endTime){
			const diff = task.endTime.getTime() - task.startTime.getTime();
			totalDiff += diff
		}
	})

	const executionTime =  calcDiffExecutionTime(totalDiff)
	return executionTime
}