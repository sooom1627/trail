import { Tag } from "@/lib/tag/interface/Tag";

export const getTagNameById = (id: string, tags: Tag[]): string[] => {
  const tagColors = {"zinc":"#71717a", "red":"#ef4444", "yellow":"#facc15", "green":"#22c55e", "cyan":"#22d3ee", "blue":"#3b82f6", "purple":"#8b5cf6"};
  const tag = tags.find(tag => tag.id === id);
  const tagName = tag ? tag.title : "undefind"
  const tagColor = tag ? tagColors[tag.color as keyof typeof tagColors] :"#a1a1aa"
  return [tagName, tagColor]
}