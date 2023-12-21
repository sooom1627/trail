import { Tag } from "@/lib/tag/interface/Tag";

export const getTagDetailsByIds = (tagIds: string[], tags: Tag[]): { titles: string[], colors: string[] } => {
  const titles: string[] = [];
  const colors: string[] = [];
  const tagColor = {"zinc":"#a1a1aa", "red":"#f87171", "yellow":"#facc15", "green":"#4ade80", "cyan":"#22d3ee", "blue":"#60a5fa", "purple":"#c084fc"};

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