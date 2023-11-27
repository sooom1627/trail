import { Task } from "@/features/task/interface/Task";
import styles from "./TaskTrackChart.module.css";
import { useEffect, useState } from "react";
import { calculateTaskDistribution } from "@/features/task/utils/getTaskTrackChartData";

interface TaskTrackChartProps {
	doneTasks: Task[];
}

export const TaskTrackChart: React.FC<TaskTrackChartProps> = ({
	doneTasks,
}) => {
	const [taskDistribution, setTaskDistribution] = useState<number[]>([]);

	useEffect(() => {
		const result = calculateTaskDistribution(doneTasks);
		setTaskDistribution(result);
	}, [doneTasks]);

	return (
		<div className="flex justify-between items-center">
			{taskDistribution &&
				Object.entries(taskDistribution).map(([hour, taskDuration], i) => (
					<div key={i} className="max-w-min">
						{i !== 0 && i !== 23 && i % 4 === 0 ? (
							<div
								key={i}
								className={`w-2 bg-zinc-200 h-30 rounded relative ${styles.dispTime} ${styles.taskTime}`}
								style={
									{
										"--time": `"${hour}:00"`,
										"--height": `${
											taskDuration > 60 ? 120 : taskDuration * 2
										}px`,
									} as React.CSSProperties
								}
							></div>
						) : (
							<div
								key={i}
								className={`w-2 bg-zinc-200 h-30 rounded relative ${styles.dispTime} ${styles.taskTime}`}
								style={
									{
										"--time": `""`,
										"--height": `${
											taskDuration > 60 ? 120 : taskDuration * 2
										}px`,
									} as React.CSSProperties
								}
							></div>
						)}
					</div>
				))}
		</div>
	);
};
