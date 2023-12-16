import { IndexPage } from "@/pages/IndexPage";
import { TaskPage } from "@/lib/task";
import { TagsManagePage } from "@/pages/tagsManagePage";

export const routesConfig = [
	{
		path: "/",
		element: <IndexPage leftChildren={<TaskPage />} />,
	},
	{
		path: "tags",
		element: <TagsManagePage />,
	},
];
