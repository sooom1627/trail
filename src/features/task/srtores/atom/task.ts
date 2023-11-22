import { Task } from "@/features/task/interface/Task";
import { atom } from "recoil";

export const tasksState = atom<Task[]>({
  key:"tasksState",
  default:[]
})