import { Tag } from "../interface/Tag";

export const getTagsFromLocalStorage = () =>{
  const tagsString = localStorage.getItem('tags');
  if (tagsString) {
    try {
      return tagsString? JSON.parse(tagsString) as Tag[]:[];
    } catch (error) {
      console.error('Failed to parse tasks from localStorage', error);
    }
  }
  return [];
  
}