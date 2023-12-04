import { TabContent } from "@/components/tab/TabContent";
import { Tab } from "@/components/tab/tab";
import { TaskList } from "./TaskList";
import { useState } from "react";
import { Task } from "../../interface/Task";

interface TaskTabsProps {
	todoTasks: Task[];
	doingTasks: Task[];
	doneTasks: Task[];
	setSorting: React.Dispatch<React.SetStateAction<"date" | "priority">>;
}

export const TaskTabs: React.FC<TaskTabsProps> = ({
	todoTasks,
	doingTasks,
	doneTasks,
	setSorting,
}) => {
	const tabNames = ["todo", "doing", "done"];
	const [activeTab, setActiveTab] = useState(tabNames[0]);
	return (
		<Tab
			tabNames={tabNames}
			activeTab={activeTab}
			setActiveTab={setActiveTab}
			setSorting={setSorting}
		>
			<TabContent activeTab={activeTab} tabName="todo">
				<TaskList tasks={todoTasks} />
			</TabContent>
			<TabContent activeTab={activeTab} tabName="doing">
				<TaskList tasks={doingTasks} />
			</TabContent>
			<TabContent activeTab={activeTab} tabName="done">
				<TaskList tasks={doneTasks} />
			</TabContent>
		</Tab>
	);
};
