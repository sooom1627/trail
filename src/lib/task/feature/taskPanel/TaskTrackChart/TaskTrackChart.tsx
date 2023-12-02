import { Task } from "@/lib/task/interface/Task";
import styles from "./TaskTrackChart.module.css";
import { useEffect, useState } from "react";
import { calculateTaskDistribution } from "@/lib/task/utils/getTaskTrackChartData";

interface TaskTrackChartProps {
	doneTasks: Task[];
}

const TaskTimeBlock: React.FC<{
	hour: string;
	taskDuration: number;
	showTime: boolean;
}> = ({ hour, taskDuration, showTime }) => {
	return (
		<div
			className={`w-2 bg-zinc-200 h-30 rounded relative ${styles.dispTime} ${styles.taskTime}`}
			style={
				{
					"--time": showTime ? `"${hour}:00"` : `""`,
					"--height": `${taskDuration > 60 ? 120 : taskDuration * 2}px`,
				} as React.CSSProperties
			}
		></div>
	);
};

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
						<TaskTimeBlock
							hour={hour}
							taskDuration={taskDuration}
							showTime={i !== 0 && i !== 23 && i % 4 === 0}
						/>
					</div>
				))}
		</div>
	);
};
