import styles from "./TaskTrackChart.module.css";

export const TaskTrackChart = () => {
	return (
		<div className="flex justify-between items-center">
			{Array.from({ length: 24 }).map((_, i) => (
				<>
					<div key={i} className="max-w-min">
						{i !== 0 && i !== 23 && i % 4 === 0 ? (
							<div
								key={i}
								className={`w-2 bg-zinc-200 h-30 rounded relative ${styles.dispTime} ${styles.taskTime}`}
								style={
									{
										"--time": `"${i}:00"`,
										"--height": "4px",
									} as React.CSSProperties
								}
							></div>
						) : (
							<div
								key={i}
								className={`w-2 bg-zinc-200 h-30 rounded relative ${styles.dispTime} ${styles.taskTime}`}
								style={
									{
										"--time": `""`,
										"--height": "120px",
									} as React.CSSProperties
								}
							></div>
						)}
					</div>
				</>
			))}
		</div>
	);
};
