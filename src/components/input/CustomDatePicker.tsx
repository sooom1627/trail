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
			placeholderText="Select Deadline date"
			dateFormat="yyyy/MM/dd"
			className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
		/>
	);
};
