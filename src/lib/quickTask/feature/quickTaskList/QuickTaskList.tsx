import { QuickTaskCard } from "./QuickTaskCard";

export const QuickTaskList = () => {
	return (
		<div>
			{[1, 2].map((i) => (
				<QuickTaskCard key={i} />
			))}
		</div>
	);
};
