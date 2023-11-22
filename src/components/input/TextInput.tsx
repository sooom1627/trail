interface TextInputProps {
	id: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
	id,
	placeholder,
	value,
	onChange,
}) => (
	<input
		type="text"
		id={id}
		className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500"
		placeholder={placeholder}
		value={value}
		onChange={(e) => onChange(e.target.value)}
	/>
);
