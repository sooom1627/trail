import { useRecoilState } from "recoil";
import { selectedTasksState } from "../../srtores/atom/taskAtom";
import { TimerEmpty } from "../../ui/Timer/TimerEmpty";
import { TaskTrackChart } from "./TaskTrackChart/TaskTrackChart";
import { Task } from "../../interface/Task";
import { TaskExecution } from "./executionTaskManage/taskExecution";
import { TrackChartHeading } from "../../ui/heading/TrackChartHeading";

interface TaskPanelProps {
	doneTasks: Task[];
}

export const TaskPanel: React.FC<TaskPanelProps> = ({ doneTasks }) => {
	const [selectedTask] = useRecoilState(selectedTasksState);

	return (
		<div className="flex w-full gap-4">
			<div className="h-56 min-w-5/12 max-w-5/12 w-full bg-zinc-100 rounded-lg px-4 py-6">
				{selectedTask ? (
					<>
						<TaskExecution selectedTask={selectedTask} />
					</>
				) : (
					<>
						<TimerEmpty />
					</>
				)}
			</div>
			<div className="bg-zinc-100 p-6 rounded-lg mb-4 h-56 w-7/12">
				<TrackChartHeading />
				<TaskTrackChart doneTasks={doneTasks} />
			</div>
		</div>
	);
};
