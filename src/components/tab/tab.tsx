import { SortIcon } from "../icons/action/SortIcon";
import { TabPanel } from "./TabPanel";
import ExportTasksToCsvButton from "@/lib/task/utils/exportTasksToCsv";

interface TabProps {
	tabNames: string[];
	taskCounts: number[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
	children: React.ReactNode;
	sortingHandler: () => void;
}

export const Tab: React.FC<TabProps> = (props) => {
	const {
		tabNames,
		taskCounts,
		activeTab,
		setActiveTab,
		children,
		sortingHandler,
	} = props;

	// comment
	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<>
			<div className="mb-2 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
				<ul
					className="flex flex-wrap -mb-px text-sm font-medium text-center"
					id="default-tab"
					data-tabs-toggle="#default-tab-content"
					role="tablist"
				>
					{tabNames.map((tabName, i) => (
						<TabPanel
							key={tabName}
							activeTab={activeTab}
							handleTabClick={() => handleTabClick(tabName)}
							tabName={tabName}
							taskCount={taskCounts[i]}
						/>
					))}
				</ul>

				{activeTab === "todo" && (
					<div className="flex items-center gap-3 mr-4">
						<div
							className="w-fit mt-4 cursor-pointer flex items-center"
							onClick={sortingHandler}
						>
							<SortIcon />
						</div>
						<div className="w-fit mt-4 cursor-pointer flex items-center">
							<ExportTasksToCsvButton />
						</div>
					</div>
				)}
			</div>
			<div id="default-tab-content" className="overflow-y-scroll">
				{children}
			</div>
		</>
	);
};
