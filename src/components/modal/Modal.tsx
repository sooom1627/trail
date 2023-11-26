import { SecondaryButton } from "../button/SecondaryButton";
import { CloseIcon } from "../icons/action/CloseIcon";

interface ModalProps {
	modalTitle: string;
	children: React.ReactNode;
	confirmButton: React.ReactNode;
	deleteButton: React.ReactNode;
	toggleModal: boolean;
	setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({
	modalTitle,
	children,
	confirmButton,
	deleteButton,
	toggleModal,
	setToggleModal,
}) => {
	return (
		<>
			{toggleModal && (
				<>
					<div
						className="fixed inset-0 bg-zinc-700 opacity-40 z-10"
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
								<div className="flex justify-end items-center gap-x-1 py-3 px-4 border-t dark:border-zinc-700">
									{deleteButton}
									{confirmButton}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
