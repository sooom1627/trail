import { Task } from "@/lib/task/interface/Task"
import { transformTasksToChartData } from "../utils/transformTasksToChartData"
import { Tag } from "@/lib/tag/interface/Tag";

interface useGetWeeklyLineChartDataProps{
  setSeries: React.Dispatch<React.SetStateAction<{
    name: string;
    data: {
        x: string;
        y: number;
    }[];
  }[]>>
  setColorData: React.Dispatch<React.SetStateAction<string[]>>
  tasks:Task[],
  tags:Tag[]
}

export const useGetWeeklyLineChartData = ({setSeries, setColorData,tasks, tags}:useGetWeeklyLineChartDataProps) =>{
  const [chartData, colorData] = transformTasksToChartData(tasks, tags)
  const getWeeklyLineChartData = () =>{
    setSeries(chartData)
    setColorData(colorData)
  }
  return getWeeklyLineChartData
}