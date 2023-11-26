import { useState } from "react";
import { PrimaryButton } from "../button/PrimaryButton";
import { SecondaryButton } from "../button/SecondaryButton";
import { CloseIcon } from "../icons/action/CloseIcon";

interface ModalProps {
	modalTitle: string;
	children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ modalTitle, children }) => {
	const [toggleModal, setToggleModal] = useState<boolean>(false);
	return (
		<>
			<PrimaryButton
				onClick={() => setToggleModal(true)}
				childlen="Vertically centered modal"
			/>
			{toggleModal && (
				<>
					<div
						className="fixed inset-0 bg-zinc-700 opacity-40"
						onClick={() => setToggleModal(false)}
					/>
					<div className="w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto flex items-center justify-center">
						<div className="duration-500 mt-0 ease-out transition-all w-1/2 flex items-center">
							<div className="w-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-zinc-800 dark:border-zinc-700 dark:shadow-slate-700/[.7]">
								<div className="flex justify-between items-center py-3 px-4 border-b dark:border-zinc-700">
									<h3 className="font-bold text-zinc-800 dark:text-white">
										{modalTitle}
									</h3>
									<SecondaryButton
										onClick={() => setToggleModal(false)}
										childlen={<CloseIcon />}
									/>
								</div>
								<div className="p-4 overflow-y-auto">{children}</div>
								<div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-zinc-700">
									<button
										type="button"
										className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-zinc-600"
										data-hs-overlay="#hs-vertically-centered-modal"
									>
										Close
									</button>
									<button
										type="button"
										className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-zinc-600 text-white hover:bg-zinc-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-zinc-600"
									>
										Save changes
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
