import { v4 as uuidv4 } from 'uuid';
import { getTagsFromLocalStorage } from "../dataAcess/getTagsFromLocalStorage"
import { Tag } from "../interface/Tag"
import { saveTagsToLocalStorage } from '../dataAcess/saveTagsToLocalStorage';
import { useRecoilState } from 'recoil';
import { tagsState } from '../stores/tagsAtom';

export const useSaveTags = () =>{
  const [, setTags] = useRecoilState(tagsState)
  const saveTags = (name:string) =>{
    const currentTags = getTagsFromLocalStorage()

    const newTags: Tag = {
      id: uuidv4(),
      name,
      desc:"",
      color:"zinc"
    }

    const updatedTags = [...currentTags, newTags]
    saveTagsToLocalStorage(updatedTags)
    setTags(updatedTags)
  }

  return saveTags
}