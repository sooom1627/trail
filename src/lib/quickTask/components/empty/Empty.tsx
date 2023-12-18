import styles from "./Empty.module.css";

export const Empty = ({ formValue }: { formValue: string }) => {
	return (
		<div
			className="text-zinc-200 pl-4 pr-2 py-4 w-full bg-zinc-800 rounded-lg overflow-hidden max-w-full mt-4"
			style={{ fontFamily: '"JetBrains Mono", monospace' }}
		>
			<p className={`${styles.typing} text-green-500`}>
				<span className="text-zinc-400 mr-1">
					[{new Date().toLocaleTimeString()}]
				</span>
				Welcome to QuickTask Editor!! 🎉
			</p>
			<p className={`${styles.typing}`} style={{ animationDelay: "1800ms" }}>
				<span className="text-zinc-400 mr-1">
					[{new Date().toLocaleTimeString()}]
				</span>
				Check the progress of your tasks...
			</p>
			<p
				className={`${styles.typing} text-red-500`}
				style={{ animationDelay: "4000ms" }}
			>
				Oops! Looks like your to-do list vanished!!
			</p>
			<p
				className={`${styles.typing} text-zinc-400 mt-4`}
				style={{ animationDelay: "6000ms" }}
			>
				// Add tasks that can be completed in 5 minutes or less
			</p>
			<p
				className={`${styles.typing} text-zinc-400`}
				style={{ animationDelay: "8500ms" }}
			>
				// Here's an example of a task.
			</p>
			<p className={`${styles.typing}`} style={{ animationDelay: "10500ms" }}>
				・Check email responses.
			</p>
			<p className={`${styles.typing}`} style={{ animationDelay: "11800ms" }}>
				・Contact Bob to check documents.
			</p>
			<p className={`${styles.typing}`} style={{ animationDelay: "13400ms" }}>
				・Review tomorrow's meeting agenda.
			</p>
			<p
				className={`${styles.typing} text-zinc-400 mt-4`}
				style={{ animationDelay: "15200ms" }}
			>
				// Stay productive!
			</p>
			<p className={`${styles.typing}`} style={{ animationDelay: "17000ms" }}>
				<span className="text-sky-500">const </span>QuickTask{" "}
				<span className="text-red-400">= {"{"}</span>
			</p>
			<p
				className={`${styles.typing} pl-3`}
				style={{ animationDelay: "17000ms" }}
			>
				tasks: <span className="text-orange-400">[]</span>
				<span className="text-zinc-400">,</span>
			</p>
			<p
				className={`${styles.typing} pl-3`}
				style={{ animationDelay: "17000ms" }}
			>
				<span className="text-green-300">add</span>:{" "}
				<span className="text-sky-500">function</span>
				<span className="text-amber-400">(</span>
				<span className="text-orange-400">task</span>:{" "}
				<span className="text-sky-500">string</span>
				<span className="text-amber-400">)</span>
				<span className="text-red-400">{"{"}</span>
			</p>
			<p
				className={`${styles.typing} pl-6`}
				style={{ animationDelay: "17000ms" }}
			>
				<span className="text-zinc-400">this.</span>tasks.
				<span className="text-green-300">push</span>
				<span className="text-amber-400">(</span>task
				<span className="text-amber-400">)</span>
				<span className="text-zinc-400">;</span>
			</p>
			<p
				className={`${styles.typing} pl-3`}
				style={{ animationDelay: "17000ms" }}
			>
				<span className="text-red-400">{"}"}</span>
			</p>
			<p
				className={`${styles.typing} text-zinc-400`}
				style={{ animationDelay: "17000ms" }}
			>
				<span className="text-red-400">{"}"}</span>;
			</p>
			<p
				className={`${styles.typing} mt-4`}
				style={{ animationDelay: "19000ms" }}
			>
				QuickTask.<span className="text-green-300">add</span>
				<span className="text-amber-400">(</span>Fun Assignment:
				{formValue === "" ? "___" : formValue}
				<span className="text-amber-400">)</span>
			</p>
		</div>
	);
};
