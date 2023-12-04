interface TabPanelsProps {
	activeTab: string;
	handleTabClick: (tabName: string) => void;
	tabName: string;
	taskCount: number;
}

export const TabPanel: React.FC<TabPanelsProps> = (props) => {
	const { activeTab, handleTabClick, tabName, taskCount } = props;
	return (
		<li className="me-2" role="presentation">
			<button
				className={`inline-block p-4  rounded-t-lg ${
					activeTab === tabName
						? "active border-b-2 border-zinc-400 font-bold"
						: ""
				}`}
				id={`${tabName}-tab`}
				data-tabs-target={`#${tabName}`}
				type="button"
				role="tab"
				aria-controls={tabName}
				aria-selected={activeTab === tabName}
				onClick={() => handleTabClick(tabName)}
			>
				{tabName}
				<span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-zinc-800 bg-zinc-200 rounded-full">
					{taskCount}
				</span>
			</button>
		</li>
	);
};
