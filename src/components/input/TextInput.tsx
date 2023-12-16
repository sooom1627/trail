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
		className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 pl-4"
		placeholder={placeholder}
		value={value}
		onChange={(e) => onChange(e.target.value)}
	/>
);
