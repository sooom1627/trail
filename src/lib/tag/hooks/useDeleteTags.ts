import { useRecoilState } from "recoil"
import { getTagsFromLocalStorage } from "../dataAcess/getTagsFromLocalStorage"
import { Tag } from "../interface/Tag"
import { tagsState } from "../stores/tagsAtom"
import { saveTagsToLocalStorage } from "../dataAcess/saveTagsToLocalStorage"

export const useDeleteTags = (tagId:string) =>{
  const [,setTags] = useRecoilState(tagsState)

  const deleteTags = () =>{
    const currentTags = getTagsFromLocalStorage()
    const updatedTasks = currentTags.filter((tag:Tag) => tag.id !== tagId )

    saveTagsToLocalStorage(updatedTasks)
    setTags(updatedTasks)
  }
  
  return deleteTags
}