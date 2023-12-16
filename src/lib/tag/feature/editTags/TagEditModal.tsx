import { Modal } from "@/components/modal/Modal";
import { Tag } from "../../interface/Tag";
import { TextInput } from "@/components/input/TextInput";
import { useEffect, useState } from "react";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { AtentionButton } from "@/components/button/AtentionButton";
import { useEditTags } from "../../hooks/useEditTags";

interface TaskEditModalProps {
	tag: Tag;
	toggleModal: boolean;
	setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const tagColor = ["zinc", "red", "yellow", "green", "cyan", "blue", "purple"];

export const TagEditModal: React.FC<TaskEditModalProps> = ({
	tag,
	toggleModal,
	setToggleModal,
}) => {
	const [formValue, setFormValue] = useState<string>("");
	const [colorValue, setColorValue] = useState<string>("");
	const [descValue, setDescValue] = useState<string>("");
	const editTags = useEditTags({
		tagId: tag.id,
		title: formValue,
		desc: descValue,
		color: colorValue,
	});

	useEffect(() => {
		setFormValue(tag.title);
		setColorValue(tag.color);
		setDescValue(tag.desc);
	}, [tag]);

	const editTagHandler = () => {
		editTags();
		setToggleModal(false);
	};

	return (
		<Modal
			modalTitle={tag.title}
			toggleModal={toggleModal}
			setToggleModal={setToggleModal}
			confirmButton={
				<PrimaryButton onClick={() => editTagHandler()}>Confirm</PrimaryButton>
			}
			deleteButton={
				<AtentionButton onClick={() => alert("hello")}>Delete</AtentionButton>
			}
		>
			<div>
				<p className="text-sm font-bold pb-2">Title</p>
				<TextInput
					id="editTagTitle"
					placeholder="Edit Task Title!"
					value={formValue}
					onChange={setFormValue}
				/>
			</div>

			<div className="mt-4">
				<p className="text-sm font-bold pb-2">Color</p>
				<ul className="flex gap-4">
					{tagColor.map((color) => (
						<li
							key={color}
							className={`w-8 h-8 bg-${color}-500 rounded-full cursor-pointer duration-200 ${
								color === colorValue
									? "opacity-100"
									: "opacity-50 hover:opacity-100"
							}`}
							onClick={() => setColorValue(color)}
						></li>
					))}
				</ul>
			</div>
			<div className="mt-4">
				<p className="text-sm font-bold pb-2">Description</p>
				<textarea
					id="editTagdesc"
					rows={4}
					placeholder={tag.desc === "" ? "Input Tag Description!" : tag.desc}
					value={descValue}
					onChange={(e) => setDescValue(e.target.value)}
					className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 pl-4"
				></textarea>
			</div>
		</Modal>
	);
};
