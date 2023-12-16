import { useRecoilState } from "recoil"
import { tagsState } from "../stores/tagsAtom"
import { getTagsFromLocalStorage } from "../dataAcess/getTagsFromLocalStorage"

export const useLoadTags = () =>{
  const [tags, setTags] = useRecoilState(tagsState)
  const loadTags = () =>{
    const cureentTags = getTagsFromLocalStorage()
    setTags(cureentTags)
  }

  return {tags, loadTags}
}