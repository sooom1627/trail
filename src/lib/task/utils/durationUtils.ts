// 開始時間と終了時間から作業時間を計算する関数
const calculateWorkDuration = (
	HOURS_IN_DAY:number,
  MINUTES_IN_HOUR:number,
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

// 一時停止時間から作業時間を減算する関数
const subtractPauseDuration = (
  MINUTES_IN_HOUR:number,
	hourlyDurations: number[],
	pauses?: { pause: Date; restart?: Date }[]
) => {
	if (pauses) {
		pauses.forEach((pause) => {
			if (pause.pause && pause.restart) {
				const pauseHour = pause.pause.getHours();
				const pauseMinutes = pause.pause.getMinutes();
				const restartHour = pause.restart.getHours();
				const restartMinutes = pause.restart.getMinutes();
				if (pauseHour === restartHour) {
					hourlyDurations[pauseHour] -= restartMinutes - pauseMinutes;
				} else {
					for (let hour = pauseHour + 1; hour < restartHour; hour++) {
						hourlyDurations[hour] -= MINUTES_IN_HOUR;
					}
					hourlyDurations[pauseHour] -= MINUTES_IN_HOUR - pauseMinutes;
					hourlyDurations[restartHour] -= restartMinutes;
				}
			}
		});
	}
	return hourlyDurations;
};

// 全体の作業時間を計算する関数
export const calculateDuration = (
  HOURS_IN_DAY:number,
  MINUTES_IN_HOUR:number,
	startHour: number,
	startMinutes: number,
	endHour: number,
	endMinutes: number,
	pauses?: { pause: Date; restart?: Date }[]
) => {
	let hourlyDurations = calculateWorkDuration(
		HOURS_IN_DAY,
		MINUTES_IN_HOUR,
		startHour,
		startMinutes,
		endHour,
		endMinutes
	);
	return subtractPauseDuration(MINUTES_IN_HOUR, hourlyDurations, pauses);
};