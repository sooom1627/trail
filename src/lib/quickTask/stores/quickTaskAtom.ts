import { QuickTask } from "../interface/QuickTask";
import { atom } from "recoil";

export const quickTasksState = atom<QuickTask[]>({
  key:"quickTasksState",
  default:[]
})

