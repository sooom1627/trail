import { QuickTaskPanel } from "@/lib/quickTask/index.tsx";
import { Layout } from "../components/templates/Layout";

interface IndexPageProps {
	leftChildren: React.ReactNode;
}

export const IndexPage: React.FC<IndexPageProps> = ({ leftChildren }) => {
	return (
		<Layout>
			<div className="flex py-10 h-screen gap-6 w-full">
				<div className="max-w-2/3 min-w-2/3 flex flex-col">{leftChildren}</div>
				<div className="flex flex-col gap-4 px-2 divide-y divide-zinc-400 max-w-1/3 min-w-1/3 overflow-hidden">
					<div className="h-1/3 w-full font-bold pb-2 flex items-center justify-center">
						何入れよう...
					</div>
					<div className="h-2/3 py-2 font-bold">
						<QuickTaskPanel />
					</div>
				</div>
			</div>
		</Layout>
	);
};
