export const TaskRow = () => {
	return (
		<tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700 w-full">
			<th
				scope="row"
				className="px-4 py-2 font-medium text-zinc-900 whitespace-nowrap max-w-[160px]"
			>
				タスクのタイトル
			</th>
			<td className="px-4 py-2">
				<span
					className={`${`bg-zinc-200`} text-zinc-800 text-xs font-medium px-2.5 py-0.5 rounded duration-200`}
				>
					タグ
				</span>
			</td>
			<td className="px-4 py-2">00:00:00</td>
			<td className="px-4 py-2">
				<p className="">Priority</p>
			</td>
		</tr>
	);
};
