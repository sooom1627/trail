import { Tag } from "../interface/Tag";

export const saveTagsToLocalStorage = (tags:Tag[]) =>{
  try {
    localStorage.setItem('tags', JSON.stringify(tags));
  } catch (error) {
    console.error('Failed to save tags to localStorage', error);
  }
}