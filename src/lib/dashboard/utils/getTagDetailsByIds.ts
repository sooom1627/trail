import { Tag } from "@/lib/tag/interface/Tag";

export const getTagDetailsByIds = (tagIds: string[], tags: Tag[]): { titles: string[], colors: string[] } => {
  const titles: string[] = [];
  const colors: string[] = [];
  const tagColor = {"zinc":"#71717a", "red":"#ef4444", "yellow":"#facc15", "green":"#22c55e", "cyan":"#22d3ee", "blue":"#3b82f6", "purple":"#8b5cf6"};

  tagIds.forEach(tagId => {
    const tag = tags.find(t => t.id === tagId);

    if (tag) {
      titles.push(tag.title);
      colors.push(tagColor[tag.color as keyof typeof tagColor] || '#a1a1aa');
    } else {
      titles.push('undefined');
      colors.push('#a1a1aa');
    }
  });

  return { titles, colors };
}