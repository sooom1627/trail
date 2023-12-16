import { v4 as uuidv4 } from 'uuid';
import { getTagsFromLocalStorage } from "../dataAcess/getTagsFromLocalStorage"
import { Tag } from "../interface/Tag"
import { saveTagsToLocalStorage } from '../dataAcess/saveTagsToLocalStorage';

export const useSaveTags = () =>{
  const saveTags = (name:string) =>{
    const currentTags = getTagsFromLocalStorage()

    const newTags: Tag = {
      id: uuidv4(),
      name,
      desc:"",
      color:""
    }

    const updatedTags = [...currentTags, newTags]
    saveTagsToLocalStorage(updatedTags)
  }

  return saveTags
}