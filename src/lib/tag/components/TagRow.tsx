import { Tag } from "../interface/Tag";

interface TagTableProps {
	tag: Tag;
}

export const TagRow = ({ tag }: TagTableProps) => {
	return (
		<tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700 w-full">
			<th
				scope="row"
				className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap max-w-[160px]"
			>
				{tag.name}
			</th>
			<td className="px-6 py-4">
				<div className={`rounded bg-${tag.color}-200 h-4 w-12`}>{""}</div>
			</td>
			<td className="px-6 py-4">{tag.desc ? tag.desc : "none"}</td>
			<td className="px-6 py-4">$2999</td>
		</tr>
	);
};
