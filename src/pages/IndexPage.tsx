import { QuickTaskPanel } from "@/lib/quickTask/feature/QuickTaskPanel";
import { Layout } from "../components/templates/Layout";

interface IndexPageProps {
	leftChildren: React.ReactNode;
}

export const IndexPage: React.FC<IndexPageProps> = ({ leftChildren }) => {
	return (
		<Layout>
			<div className="flex py-10 h-screen gap-8 w-full">
				<div className="max-w-2/3 min-w-2/3 flex flex-col">{leftChildren}</div>
				<div className="flex flex-col gap-4 grow px-4 divide-y divide-dotted divide-zinc-200 max-w-1/3 min-w-1/3">
					<div className="h-1/4 rounded-lg w-full font-bold pb-2">hello</div>
					<div className="h-3/4 rounded-lg py-2 font-bold">
						<QuickTaskPanel />
					</div>
				</div>
			</div>
		</Layout>
	);
};
