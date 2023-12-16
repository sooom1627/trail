import { useRecoilState } from "recoil"
import { getTagsFromLocalStorage } from "../dataAcess/getTagsFromLocalStorage"
import { saveTagsToLocalStorage } from "../dataAcess/saveTagsToLocalStorage"
import { Tag } from "../interface/Tag"
import { tagsState } from "../stores/tagsAtom"

interface useEditTagsProps{
  tagId:string;
  title:string;
  desc:string;
  color:string;
}

export const useEditTags = ({tagId, title, desc, color}:useEditTagsProps) =>{
  const [, setTags] = useRecoilState(tagsState)
  const updateTags = (tag:Tag) =>{
    if(tag.id === tagId){
      return {...tag, title, desc, color}
    }else{
      return {...tag}
    }
  }

  const editTags = () =>{
    const currentTags = getTagsFromLocalStorage()
    const updatedTags = currentTags.map((tag)=>updateTags(tag))
    saveTagsToLocalStorage(updatedTags)
    setTags(updatedTags)
  }

  return editTags
}