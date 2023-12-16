import { Tag } from "../interface/Tag";

interface TagTableProps {
	tag: Tag;
	setSelectedTags: React.Dispatch<React.SetStateAction<Tag>>;
	setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TagRow = ({
	tag,
	setSelectedTags,
	setToggleModal,
}: TagTableProps) => {
	return (
		<tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700 w-full">
			<th
				scope="row"
				className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap max-w-[160px]"
			>
				{tag.title}
			</th>
			<td className="px-6 py-4">
				<div className={`rounded bg-${tag.color}-400 h-4 w-12`}>{""}</div>
			</td>
			<td className="px-6 py-4">{tag.desc ? tag.desc : "-"}</td>
			<td className="px-6 py-4">
				<p
					className="underline underline-offset-2 cursor-pointer hover:text-zinc-900"
					onClick={() => {
						setSelectedTags(tag);
						setToggleModal(true);
					}}
				>
					Edit
				</p>
			</td>
		</tr>
	);
};
