export const getPauseTime = (pauses: {
  pause: Date;
  restart?: Date | undefined;
}[] | undefined) => {
  if (!pauses) return '00h 00m';

  let totalPauseTimeInMs = 0;

  pauses.forEach(pause => {
    const pauseTime = pause.pause;
    const restartTime = pause.restart || new Date();
    totalPauseTimeInMs += restartTime.getTime() - pauseTime.getTime();
  });

  const totalPauseTimeInMinutes = Math.floor(totalPauseTimeInMs / 60000);
  const hours = Math.floor(totalPauseTimeInMinutes / 60);
  const minutes = totalPauseTimeInMinutes % 60;

  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');

  return `${hoursStr}h ${minutesStr}m`;
}