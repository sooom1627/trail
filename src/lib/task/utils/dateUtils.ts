// 同じ日付かどうかを判定する関数
export const isSameDay = (date1: Date, date2: Date) => {
	return date1.getDate() === date2.getDate();
};

// 日付を日の開始時刻にリセットする関数
export const resetToStartOfDay = () => {
	const resetDate = new Date();
	resetDate.setHours(0, 0, 0, 0);
	return resetDate;
};