import { PanelTitle } from "../components/PanelTitle";
import styles from "@/assets/cyberpunkCheckbox.module.css";

export const Habit = () => {
	return (
		<>
			<PanelTitle />
			<div className="h-full overflow-y-auto pb-8 mt-2">
				<div className="flex items-center p-2 w-ful">
					<input className={styles.cyberpunkCheckbox} type="checkbox" />
					<label
						className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow `}
					>
						係数確認
					</label>
					<p className="text-xs font-medium text-zinc-400">21:00</p>
				</div>
				<div className="flex items-center p-2 w-ful overflow-hidden">
					<input className={styles.cyberpunkCheckbox} type="checkbox" />
					<label
						className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow `}
					>
						係数確認
					</label>
					<p className="text-xs font-medium text-zinc-400">21:00</p>
				</div>
				<div className="flex items-center p-2 w-ful">
					<input className={styles.cyberpunkCheckbox} type="checkbox" />
					<label
						className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow `}
					>
						係数確認
					</label>
					<p className="text-xs font-medium text-zinc-400">21:00</p>
				</div>
				<div className="flex items-center p-2 w-ful">
					<input className={styles.cyberpunkCheckbox} type="checkbox" />
					<label
						className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow `}
					>
						係数確認
					</label>
					<p className="text-xs font-medium text-zinc-400">21:00</p>
				</div>
				<div className="flex items-center p-2 w-ful">
					<input className={styles.cyberpunkCheckbox} type="checkbox" />
					<label
						className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow `}
					>
						係数確認
					</label>
					<p className="text-xs font-medium text-zinc-400">21:00</p>
				</div>
				<div className="flex items-center p-2 w-ful">
					<input className={styles.cyberpunkCheckbox} type="checkbox" />
					<label
						className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow `}
					>
						係数確認
					</label>
					<p className="text-xs font-medium text-zinc-400">21:00</p>
				</div>
			</div>
		</>
	);
};
