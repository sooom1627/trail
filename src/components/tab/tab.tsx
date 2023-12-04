import { TabPanel } from "./TabPanel";

interface TabProps {
	tabNames: string[];
	taskCounts: number[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
	children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = (props) => {
	const { tabNames, taskCounts, activeTab, setActiveTab, children } = props;

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
			</div>
			<div id="default-tab-content" className="overflow-y-scroll">
				{children}
			</div>
		</>
	);
};
