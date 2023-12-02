import { ReactElement } from "react";
import { MiddleIcon } from "@/components/icons/priority/MiddleIcon";
import { HighestIcon } from "@/components/icons/priority/HighestIcon";
import { LowestIcon } from "@/components/icons/priority/LowestIcon";
import { HighIcon } from "@/components/icons/priority/HighIcon";
import { LowIcon } from "@/components/icons/priority/LowIcon";

type Priority = "Highest" | "High" | "Medium" | "Low" | "Lowest";

const priorityIcons: Record<Priority, ReactElement> = {
	Highest: <HighestIcon />,
	High: <HighIcon />,
	Medium: <MiddleIcon />,
	Low: <LowIcon />,
	Lowest: <LowestIcon />,
};

export const getPriorityIcon = (priority: Priority) => {
	return priorityIcons[priority] || <MiddleIcon />;
};
