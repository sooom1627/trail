import { Task } from "../interface/Task";

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

const isSameDay = (date1: Date, date2: Date) => {
	return date1.getDate() === date2.getDate();
};

const resetToStartOfDay = (date: Date) => {
	const resetDate = new Date(date);
	resetDate.setHours(0, 0, 0, 0);
	return resetDate;
};

const refineStartTime = (tasks: Task[]) => {
	const today = new Date();
	return tasks.map((task) => {
		if (task.startTime && !isSameDay(task.startTime, today)) {
			return { ...task, startTime: resetToStartOfDay(task.startTime) };
		}
		return task;
	});
};

const calculateDuration = (
	startHour: number,
	startMinutes: number,
	endHour: number,
	endMinutes: number
) => {
	let hourlyDurations = new Array(HOURS_IN_DAY).fill(0);
	if (startHour === endHour) {
		hourlyDurations[startHour] += endMinutes - startMinutes;
	} else {
		for (let hour = startHour + 1; hour < endHour; hour++) {
			hourlyDurations[hour] += MINUTES_IN_HOUR;
		}
		hourlyDurations[startHour] += MINUTES_IN_HOUR - startMinutes;
		hourlyDurations[endHour] += endMinutes;
	}
	return hourlyDurations;
};

export const calculateTaskDistribution = (tasks: Task[]) => {
	const refinedStartTimeTasks = refineStartTime(tasks);
	let hourlyDurations = new Array(HOURS_IN_DAY).fill(0);

	refinedStartTimeTasks.forEach((task) => {
		if (task && task.startTime && task.endTime) {
			const { startTime, endTime } = task;
			const startHour = startTime.getHours();
			const startMinutes = startTime.getMinutes();
			const endHour = endTime.getHours();
			const endMinutes = endTime.getMinutes();
			const taskHourlyDurations = calculateDuration(
				startHour,
				startMinutes,
				endHour,
				endMinutes
			);
			hourlyDurations = hourlyDurations.map(
				(val, index) => val + taskHourlyDurations[index]
			);
		}
	});

	return hourlyDurations;
};
