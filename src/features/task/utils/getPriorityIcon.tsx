import { MiddleIcon } from "@/components/icons/priority/MiddleIcon";
import { HighestIcon } from "@/components/icons/priority/HighestIcon";
import { LowestIcon } from "@/components/icons/priority/LowestIcon";
import { HighIcon } from "@/components/icons/priority/HighIcon";
import { LowIcon } from "@/components/icons/priority/LowIcon";

export const getPriorityIcon = (priority: string) => {
	switch (priority) {
		case "highest":
			return <HighestIcon />;
		case "high":
			return <HighIcon />;
		case "medium":
			return <MiddleIcon />;
		case "low":
			return <LowIcon />;
		case "lowest":
			return <LowestIcon />;
		default:
			return <MiddleIcon />;
	}
};
