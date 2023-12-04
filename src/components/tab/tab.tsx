import { SortIcon } from "../icons/action/SortIcon";
import { TabPanel } from "./TabPanel";

interface TabProps {
	tabNames: string[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
	children: React.ReactNode;
	setSorting: React.Dispatch<React.SetStateAction<"date" | "priority">>;
}

export const Tab: React.FC<TabProps> = (props) => {
	const { tabNames, activeTab, setActiveTab, children, setSorting } = props;

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	const sortingHandler = () => {
		setSorting((prev) => (prev === "date" ? "priority" : "date"));
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
					{tabNames.map((tabName) => (
						<TabPanel
							key={tabName}
							activeTab={activeTab}
							handleTabClick={() => handleTabClick(tabName)}
							tabName={tabName}
						/>
					))}
				</ul>
				{activeTab === "todo" && (
					<div
						className="w-fit mr-4 mt-2 cursor-pointer flex items-center"
						onClick={sortingHandler}
					>
						<SortIcon />
					</div>
				)}
			</div>
			<div id="default-tab-content" className="overflow-y-scroll">
				{children}
			</div>
		</>
	);
};
