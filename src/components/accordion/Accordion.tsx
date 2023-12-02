import React, { useState } from "react";
import { UpDownIcon } from "../icons/action/UpDownIcon";

interface AccordionProps {
	titleList: string[];
	children: React.ReactNode[];
}

export const Accrodion: React.FC<AccordionProps> = ({
	titleList,
	children,
}) => {
	const [openAccordionId, setOpenAccordionId] = useState<string | null>(
		`accordion-${titleList[0]}`
	);

	const handleAccordionClick = (id: string) => {
		setOpenAccordionId((prevId) => (prevId === id ? null : id));
	};
	return (
		<>
			{titleList.map((title, index) => (
				<div key={index}>
					<button
						type="button"
						className="flex items-center justify-between w-full py-2 font-medium rtl:text-right border-b border-dashed border-zinc-200 gap-3"
						onClick={() => handleAccordionClick(`accordion-${title}`)}
					>
						<span>{title}</span>
						<UpDownIcon />
					</button>
					<div
						className={openAccordionId === `accordion-${title}` ? "" : "hidden"}
					>
						{children[index]}
					</div>
				</div>
			))}
		</>
	);
};
