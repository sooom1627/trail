import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
	selectedDate: Date | undefined;
	setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
	selectedDate,
	setSelectedDate,
}) => {
	useEffect(() => {
		console.log(selectedDate);
	}, [selectedDate]);
	return (
		<DatePicker
			selected={selectedDate}
			onChange={(date: Date) => setSelectedDate(date)}
			placeholderText="yyyy/mm/dd"
			dateFormat="yyyy/MM/dd"
			className=" bg-zinc-100 border-b border-gray-300 text-sm focus:outline-none px-2 w-28 text-center"
		/>
	);
};
