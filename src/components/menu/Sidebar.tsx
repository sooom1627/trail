export const Sidebar = () => {
	return (
		<>
			<div className="h-screen py-8 px-4 w-52" aria-label="Sidebar">
				<div className="h-full px-3 py-6 overflow-y-auto bg-zinc-950 rounded-3xl shadow-2xl shadow-zinc-700 text-center">
					<div className="border-b border-zinc-500 py-16">
						<img src="/group.png" alt="" className="w-10 mx-auto" />
						<p
							className="text-xs text-zinc-100 pt-2"
							style={{ fontFamily: '"JetBrains Mono", monospace' }}
						>
							...Array
						</p>
					</div>
					<ul className="space-y-2 font-medium mt-12">
						<li>
							<a
								href="#"
								className="flex items-center p-4 text-zinc-50 rounded-lg group justify-center"
							>
								<svg
									className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-100"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-4 text-zinc-500 rounded-lg group justify-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-100"
								>
									<path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-4 text-zinc-500 rounded-lg group justify-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-100"
								>
									<path
										fillRule="evenodd"
										d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-4 text-zinc-500 rounded-lg group justify-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-100"
								>
									<path
										fillRule="evenodd"
										d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
