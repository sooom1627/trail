export const calculateExecutionTime = (
	startTime: Date,
	endTime?: Date,
	status?: string
) => {
	let diff: number;

	if (status === "doing") {
		const now = new Date();
		diff = now.getTime() - startTime.getTime();
	} else if (status === "done" && endTime) {
		diff = endTime.getTime() - startTime.getTime();
	} else {
		return;
	}

	const hours = Math.floor(diff / 1000 / 60 / 60);
	const minutes = Math.floor((diff / 1000 / 60) % 60);
	const seconds = Math.floor((diff / 1000) % 60);

	const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
	const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
	const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

	return { hoursStr, minutesStr, secondsStr };
};
