import { Task } from "../interface/Task";
import { calculateDuration } from "./durationUtils";
import { refineTaskTime } from "./taskTimeRefineUtils";

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

export const calculateTaskDistribution = (tasks: Task[]) => {
	const refinedStartTimeTasks = refineTaskTime(tasks);
	console.log(refinedStartTimeTasks);
	let hourlyDurations = new Array(HOURS_IN_DAY).fill(0);

	refinedStartTimeTasks.forEach((task) => {
		if (task && task.startTime && task.endTime) {
			const { startTime, endTime } = task;
			const startHour = startTime.getHours();
			const startMinutes = startTime.getMinutes();
			const endHour = endTime.getHours();
			const endMinutes = endTime.getMinutes();
			const taskHourlyDurations = calculateDuration(
				HOURS_IN_DAY,
				MINUTES_IN_HOUR,
				startHour,
				startMinutes,
				endHour,
				endMinutes,
				task.pauses
			);
			hourlyDurations = hourlyDurations.map(
				(val, index) => val + taskHourlyDurations[index]
			);
		}
	});

	return hourlyDurations;
};
