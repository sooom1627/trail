import { Tag } from "../interface/Tag";
import { TagRow } from "./TagRow";

interface TagTableProps {
	tags: Tag[];
	setSelectedTags: React.Dispatch<React.SetStateAction<Tag>>;
	setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TagTable = ({
	tags,
	setSelectedTags,
	setToggleModal,
}: TagTableProps) => {
	return (
		<div className="overflow-x-auto shadow-md mt-4 rounded-lg">
			<table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
				<thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Title
						</th>
						<th scope="col" className="px-6 py-3">
							Color
						</th>
						<th scope="col" className="px-6 py-3">
							Desc
						</th>
						<th scope="col" className="px-6 py-3">
							{""}
						</th>
					</tr>
				</thead>
				<tbody>
					{tags.map((tag) => (
						<TagRow
							key={tag.id}
							tag={tag}
							setSelectedTags={setSelectedTags}
							setToggleModal={setToggleModal}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
