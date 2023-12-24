import { QuickTaskPanel } from "@/lib/quickTask/index.tsx";
import { Layout } from "../components/templates/Layout";
import { Habit } from "@/lib/habit/feature/Habit";

interface IndexPageProps {
	leftChildren: React.ReactNode;
}

export const IndexPage: React.FC<IndexPageProps> = ({ leftChildren }) => {
	return (
		<Layout>
			<div className="flex py-10 h-screen gap-6 w-full">
				<div className="max-w-2/3 min-w-2/3 flex flex-col">{leftChildren}</div>
				<div className="flex flex-col gap-2 px-2 divide-y divide-zinc-400 max-w-1/3 min-w-1/3 overflow-hidden mt-2">
					<div className="h-[40%] w-full overflow-hidden py-2">
						<Habit />
					</div>
					<div className="h-2/3 py-2 font-bold w-full overflow-hidden">
						<QuickTaskPanel />
					</div>
				</div>
			</div>
		</Layout>
	);
};
