import { Layout } from "@/components/templates/Layout";
import { Dashboard } from "@/lib/dashboard/feature/DashBoard";

export const DashboardPage = () => {
	return (
		<Layout>
			<div className="flex flex-col py-10 h-screen max-w-full min-w-full">
				<Dashboard />
			</div>
		</Layout>
	);
};
