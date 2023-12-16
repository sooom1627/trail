import { Layout } from "@/components/templates/Layout";
import { TagManage } from "@/lib/tag/feature/TagManage";

export const TagsManagePage = () => {
	return (
		<Layout>
			<div className="flex flex-col py-16 h-screen max-w-full min-w-full">
				<TagManage />
			</div>
		</Layout>
	);
};
