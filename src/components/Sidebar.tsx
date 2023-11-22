export const Sidebar = () => {
	return (
		<>
			<div className="h-screen py-8 px-4 w-60" aria-label="Sidebar">
				<div className="h-full px-3 py-6 overflow-y-auto bg-zinc-950 rounded-3xl shadow-2xl shadow-zinc-700">
					<ul className="space-y-2 font-medium">
						<li>
							<a
								href="#"
								className="flex items-center p-4 text-zinc-50 rounded-lg group justify-center"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-100"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
