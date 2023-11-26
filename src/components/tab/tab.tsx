import { TabPanel } from "./TabPanel";

interface TabProps {
	tabNames: string[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
	children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = (props) => {
	const { tabNames, activeTab, setActiveTab, children } = props;

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<>
			<div className="mb-2 border-b border-zinc-200 dark:border-zinc-700">
				<ul
					className="flex flex-wrap -mb-px text-sm font-medium text-center"
					id="default-tab"
					data-tabs-toggle="#default-tab-content"
					role="tablist"
				>
					{tabNames.map((tabName) => (
						<TabPanel
							key={tabName}
							activeTab={activeTab}
							handleTabClick={() => handleTabClick(tabName)}
							tabName={tabName}
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
