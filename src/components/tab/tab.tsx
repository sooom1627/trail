import { useState } from "react";

export const Tab = () => {
	const [activeTab, setActiveTab] = useState("todo");

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<>
			<div className="mb-4 border-b border-zinc-200 dark:border-zinc-700">
				<ul
					className="flex flex-wrap -mb-px text-sm font-medium text-center"
					id="default-tab"
					data-tabs-toggle="#default-tab-content"
					role="tablist"
				>
					<li className="me-2" role="presentation">
						<button
							className={`inline-block p-4  rounded-t-lg ${
								activeTab === "todo"
									? "active border-b-2 border-zinc-400 font-bold"
									: ""
							}`}
							id="todo-tab"
							data-tabs-target="#todo"
							type="button"
							role="tab"
							aria-controls="todo"
							aria-selected={activeTab === "todo"}
							onClick={() => handleTabClick("todo")}
						>
							Todo
						</button>
					</li>
					<li className="me-2" role="presentation">
						<button
							className={`inline-block p-4  rounded-t-lg hover:text-zinc-600 hover:border-zinc-300 dark:hover:text-zinc-300 ${
								activeTab === "doing"
									? "active border-b-2 border-zinc-400 font-bold"
									: ""
							}`}
							id="doing-tab"
							data-tabs-target="#doing"
							type="button"
							role="tab"
							aria-controls="doing"
							aria-selected={activeTab === "doing"}
							onClick={() => handleTabClick("doing")}
						>
							Doing
						</button>
					</li>
					<li className="me-2" role="presentation">
						<button
							className={`inline-block p-4  rounded-t-lg hover:text-zinc-600 hover:border-zinc-300 dark:hover:text-zinc-300 ${
								activeTab === "done"
									? "active border-b-2 border-zinc-400 font-bold"
									: ""
							}`}
							id="done-tab"
							data-tabs-target="#done"
							type="button"
							role="tab"
							aria-controls="done"
							aria-selected={activeTab === "done"}
							onClick={() => handleTabClick("done")}
						>
							Done
						</button>
					</li>
				</ul>
			</div>
			<div id="default-tab-content">
				<div
					className={`p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 ${
						activeTab === "todo" ? "" : "hidden"
					}`}
					id="todo"
					role="tabpanel"
					aria-labelledby="todo-tab"
				>
					<p className="text-sm text-zinc-500 dark:text-zinc-400">
						This is some placeholder content the{" "}
						<strong className="font-medium text-zinc-800 dark:text-white">
							todo tab's associated content
						</strong>
						. Clicking another tab will toggle the visibility of this one for
						the next. The tab JavaScript swaps classes to control the content
						visibility and styling.
					</p>
				</div>
				<div
					className={`p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 ${
						activeTab === "doing" ? "" : "hidden"
					}`}
					id="doing"
					role="tabpanel"
					aria-labelledby="doing-tab"
				>
					<p className="text-sm text-zinc-500 dark:text-zinc-400">
						This is some placeholder content the{" "}
						<strong className="font-medium text-zinc-800 dark:text-white">
							doing tab's associated content
						</strong>
						. Clicking another tab will toggle the visibility of this one for
						the next. The tab JavaScript swaps classes to control the content
						visibility and styling.
					</p>
				</div>
				<div
					className={`p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 ${
						activeTab === "done" ? "" : "hidden"
					}`}
					id="done"
					role="tabpanel"
					aria-labelledby="done-tab"
				>
					<p className="text-sm text-zinc-500 dark:text-zinc-400">
						This is some placeholder content the{" "}
						<strong className="font-medium text-zinc-800 dark:text-white">
							done tab's associated content
						</strong>
						. Clicking another tab will toggle the visibility of this one for
						the next. The tab JavaScript swaps classes to control the content
						visibility and styling.
					</p>
				</div>
			</div>
		</>
	);
};
