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

const calcPausesDiffFunc = (diff:number,pauses?: { pause: Date; restart?: Date }[]) =>{
	let pausesDiffs = 0;
  pauses?.forEach(({ pause, restart }) => {
    if (restart && pause) {
      pausesDiffs += restart.getTime() - pause.getTime();
    }
  });
  const totalDiff = diff - pausesDiffs;
  const executionTime = calcDiffExecutionTime(totalDiff);
	return executionTime
}

export const getDoneTaskExecutionTime = (startTime:Date, endTime:Date, pauses?: { pause: Date; restart?: Date }[]) =>{
  const diff = endTime.getTime() - startTime.getTime();
  const executionTime = calcPausesDiffFunc(diff, pauses)
  return executionTime
}

const getDoingTaskExecutionTime = (startTime: Date, pauses?: { pause: Date; restart?: Date }[]) => {
  const now = new Date();
  const diff = now.getTime() - startTime.getTime();
	const executionTime = calcPausesDiffFunc(diff, pauses)
  return executionTime;
}

const getPauseTaskExecutionTime = (startTime: Date, pauses?: { pause: Date; restart?: Date }[]) =>{
	if(!pauses || pauses.length < 1) return
	const lastPause = pauses[pauses.length - 1].pause.getTime()
	const diff = lastPause - startTime.getTime()
	const executionTime = calcPausesDiffFunc(diff, pauses)
  return executionTime;
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
				? getDoingTaskExecutionTime(selectedTask.startTime, selectedTask.pauses)
				: null;
			if (result) {
				setExecutionTime(result);
			}
		}, 1000);

		return timerId
	}

	if (selectedTask.status === "pause") {
		const result = selectedTask.startTime
			? getPauseTaskExecutionTime(selectedTask.startTime, selectedTask.pauses)
			: null;
		if (result) {
			setExecutionTime(result);
		}
		return timerId
	}

	if (selectedTask?.startTime && selectedTask?.endTime) {
		const result = getDoneTaskExecutionTime(
			selectedTask.startTime,
			selectedTask.endTime,
			selectedTask.pauses
		);
		setExecutionTime(result);
		return timerId;
	}

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