import { Layout } from "@/components/templates/Layout";
import { AddTagsForm } from "@/lib/tag/feature/addTagsForm";

export const TagsManagePage = () => {
	return (
		<Layout>
			<div className="flex flex-col py-16 h-screen max-w-full min-w-full">
				<AddTagsForm />
			</div>
		</Layout>
	);
};
