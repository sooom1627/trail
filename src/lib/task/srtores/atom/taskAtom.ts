import { Task } from "@/lib/task/interface/Task";
import { atom } from "recoil";

export const tasksState = atom<Task[]>({
  key:"tasksState",
  default:[]
})

export const selectedTasksState = atom<Task | null>({
  key:"selectedTasksState",
  default:null
})