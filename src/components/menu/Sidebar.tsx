import { HomeIcon } from "../icons/menu/HomeIcon";
import { TagIcon } from "../icons/menu/TagIcon";
import { SummaryIcon } from "../icons/menu/SummaryIcon";
import { SettingsIcon } from "../icons/menu/SettingsIcon";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
	return (
		<>
			<div className="h-screen py-8 px-4 w-52" aria-label="Sidebar">
				<div className="h-full px-3 py-6 overflow-y-auto bg-zinc-950 rounded-3xl shadow-2xl shadow-zinc-700 text-center">
					<div className="border-b border-zinc-500 py-12">
						<img
							src="/group.png"
							alt=""
							className="w-16 mx-auto cursor-pointer"
						/>
					</div>
					<ul className="space-y-2 font-medium mt-12">
						<li>
							<div className="flex items-center p-4 text-zinc-500 rounded-lg group justify-center cursor-pointer">
								<NavLink
									to="/"
									className={({ isActive }) =>
										[isActive ? "text-zinc-100" : ""].join(" ")
									}
								>
									<HomeIcon />
								</NavLink>
							</div>
						</li>
						<li>
							<div className="flex items-center p-4 text-zinc-500 rounded-lg group justify-center cursor-pointer">
								<NavLink
									to="/tags"
									className={({ isActive }) =>
										[isActive ? "text-zinc-100" : ""].join(" ")
									}
								>
									<TagIcon />
								</NavLink>
							</div>
						</li>
						<li>
							<div
								className="flex items-center p-4 text-zinc-500 rounded-lg group justify-center cursor-pointer"
								onClick={() =>
									alert("Currently in development – with a twist of fun!")
								}
							>
								<SummaryIcon />
							</div>
						</li>
						<li>
							<div
								className="flex items-center p-4 text-zinc-500 rounded-lg group justify-center cursor-pointer"
								onClick={() =>
									alert("Currently in development – with a twist of fun!")
								}
							>
								<SettingsIcon />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
