import { IndexPage } from "@/pages/IndexPage";
import { TaskPage } from "@/lib/task";
import { TagsManagePage } from "@/pages/tagsManagePage";
import { DashboardPage } from "@/pages/DashboradPage";

export const routesConfig = [
	{
		path: "/",
		element: <IndexPage leftChildren={<TaskPage />} />,
	},
	{
		path: "tags",
		element: <TagsManagePage />,
	},
	{
		path: "dashboard",
		element: <DashboardPage />,
	},
];
