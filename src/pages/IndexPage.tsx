import { Layout } from "../components/Layout";

interface IndexPageProps {
	leftChildren: React.ReactNode;
}

export const IndexPage: React.FC<IndexPageProps> = ({ leftChildren }) => {
	return (
		<Layout>
			<div className="flex py-10 h-screen gap-8">
				<div className="max-w-2/3 min-w-2/3 flex flex-col">{leftChildren}</div>
				<div className="flex flex-col gap-4 grow px-4 divide-y divide-dotted divide-zinc-200 ">
					<p className="h-1/4 rounded-lg w-full font-bold pb-2">hello</p>
					<p className="h-1/2 rounded-lg py-2 font-bold">Quick Task</p>
					<p className="h-1/4 bg-zinc-100 p-6 rounded-lg pt-2">hello</p>
				</div>
			</div>
		</Layout>
	);
};
