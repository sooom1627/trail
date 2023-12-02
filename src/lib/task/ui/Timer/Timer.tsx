interface TimerProps {
	executionTime: {
		hoursStr: string;
		minutesStr: string;
		secondsStr: string;
	};
}

export const Timer: React.FC<TimerProps> = ({ executionTime }) => {
	return (
		<p className="text-2xl items-center m-4 text-center">
			<span className="text-5xl m-1">{executionTime.hoursStr}</span>h
			<span className="text-5xl m-1">{executionTime.minutesStr}</span>m
			<span className="text-5xl m-1">{executionTime.secondsStr}</span>s
		</p>
	);
};
