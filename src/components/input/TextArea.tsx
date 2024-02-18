export const TextArea: React.FC = () => {
	return (
		<textarea
			placeholder="memoを入力"
			rows={3}
			className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
		/>
	);
};
