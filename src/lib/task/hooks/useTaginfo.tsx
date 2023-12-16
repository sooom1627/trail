import { tagsState } from "@/lib/tag/stores/tagsAtom";
import { useRecoilValue } from "recoil";

export const useTagInfo = (tagId: string) => {
	const tags = useRecoilValue(tagsState);
	const currentTag = tags.find((tag) => tag.id === tagId);

	return currentTag;
};
