import { useEffect } from "react";
import { useLoadTags } from "../hooks/useLoadTags";
import { AddTagsForm } from "./addTags/AddTagsForm";
import { TagTable } from "../components/TagTable";

export const TagManage = () => {
	const { tags, loadTags } = useLoadTags();

	useEffect(() => {
		loadTags();
	}, []);
	return (
		<>
			<AddTagsForm />
			<TagTable tags={tags} />
		</>
	);
};
