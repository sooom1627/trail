import { useEffect, useState } from "react"
import { QuickTask } from "../interface/QuickTask"

export const quickTaskSplitter = (quickTasks:QuickTask[]) =>{
  const [todoQuickTask, setTodoQuickTask] = useState<QuickTask[]>([])
  const [doneQuickTask, setDoneQuickTask] = useState<QuickTask[]>([])

  useEffect(()=>{
    setTodoQuickTask(quickTasks.filter(task => task.status === "todo"))
    setDoneQuickTask(quickTasks.filter(task => task.status === "done"))
  },[quickTasks])

  return {todoQuickTask, doneQuickTask}
}