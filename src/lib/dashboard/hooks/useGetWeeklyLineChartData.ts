import { Task } from "@/lib/task/interface/Task"
import { filterTasksCompletedInLast7Days } from "../utils/filterTasksCompletedInLast7Days"
import { transformTasksToChartData } from "../utils/transformTasksToChartData"

interface useGetWeeklyLineChartDataProps{
  setSeries: React.Dispatch<React.SetStateAction<{
    name: string;
    data: {
        x: string;
        y: number;
    }[];
}[]>>
  tasks:Task[]
}

export const useGetWeeklyLineChartData = ({tasks,setSeries}:useGetWeeklyLineChartDataProps) =>{
  const inLast7DaysTasks = filterTasksCompletedInLast7Days(tasks)
  const chartData = transformTasksToChartData(inLast7DaysTasks)
  const getWeeklyLineChartData = () =>{
    setSeries(chartData)
  }
  return getWeeklyLineChartData
}