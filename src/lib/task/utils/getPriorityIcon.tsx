import { MiddleIcon } from "@/components/icons/priority/MiddleIcon";
import { HighestIcon } from "@/components/icons/priority/HighestIcon";
import { LowestIcon } from "@/components/icons/priority/LowestIcon";
import { HighIcon } from "@/components/icons/priority/HighIcon";
import { LowIcon } from "@/components/icons/priority/LowIcon";

export const getPriorityIcon = (priority: string) => {
	switch (priority) {
		case "Highest":
			return <HighestIcon />;
		case "High":
			return <HighIcon />;
		case "Medium":
			return <MiddleIcon />;
		case "Low":
			return <LowIcon />;
		case "Lowest":
			return <LowestIcon />;
		default:
			return <MiddleIcon />;
	}
};
