interface TabContentProps {
	activeTab: string;
	tabName: string;
	children: React.ReactNode;
}

export const TabContent: React.FC<TabContentProps> = (props) => {
	const { activeTab, tabName, children } = props;
	return (
		<div
			className={`${activeTab === tabName ? "" : "hidden"}`}
			id={tabName}
			role="tabpanel"
			aria-labelledby="todo-tab"
		>
			{children}
		</div>
	);
};
