interface TabContentProps {
	activeTab: string;
	tabName: string;
	children: React.ReactNode;
}

export const TabContent: React.FC<TabContentProps> = (props) => {
	const { activeTab, tabName, children } = props;
	return (
		<div
			className={`p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 ${
				activeTab === tabName ? "" : "hidden"
			}`}
			id={tabName}
			role="tabpanel"
			aria-labelledby="todo-tab"
		>
			{children}
		</div>
	);
};
