interface TextAreaValue {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const TextArea: React.FC<TextAreaValue> = ({ value, setValue }) => {
	return (
		<textarea
			placeholder="memoを入力"
			rows={3}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
		/>
	);
};
