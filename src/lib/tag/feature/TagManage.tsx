import { useEffect, useState } from "react";
import { useLoadTags } from "../hooks/useLoadTags";
import { AddTagsForm } from "./addTags/AddTagsForm";
import { TagTable } from "../components/TagTable";
import { Tag } from "../interface/Tag";
import { TagEditModal } from "./editTags/TagEditModal";

const defalutTag = { id: "", title: "", color: "", desc: "" };

export const TagManage = () => {
	const { tags, loadTags } = useLoadTags();
	const [toggleModal, setToggleModal] = useState(false);
	const [selectedTags, setSelectedTags] = useState<Tag>(defalutTag);

	useEffect(() => {
		loadTags();
	}, []);

	return (
		<>
			<AddTagsForm />
			<TagTable
				tags={tags}
				setSelectedTags={setSelectedTags}
				setToggleModal={setToggleModal}
			/>
			<TagEditModal
				toggleModal={toggleModal}
				setToggleModal={setToggleModal}
				tag={selectedTags}
			/>
		</>
	);
};
