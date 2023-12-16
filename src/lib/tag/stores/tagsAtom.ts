import { Tag } from "../interface/Tag";
import { atom } from "recoil";

export const tagsState = atom<Tag[]>({
  key:"tagsState",
  default:[]
})