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

export const getDoingTaskExecutionTime = (startTime: Date) =>{
  const now = new Date();
  const diff = now.getTime() - startTime.getTime();
  const executionTime =  calcDiffExecutionTime(diff)
  return executionTime
}