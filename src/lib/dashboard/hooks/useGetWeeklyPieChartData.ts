
import { groupTasksByTag } from "../utils/groupTasksByTag"
import { calculateTotalElapsedTime } from "../utils/calculateTotalElapsedTime"
import { Task } from "@/lib/task/interface/Task"
import { Tag } from "@/lib/tag/interface/Tag"
import { getTagDetailsByIds } from "../utils/getTagDetailsByIds"

interface useGetWeeklyPieChartDataProps{
  setPieChartData: React.Dispatch<React.SetStateAction<number[] | undefined>>, 
  setPieChartLabel: React.Dispatch<React.SetStateAction<string[] | undefined>>,
  setPieChartColor: React.Dispatch<React.SetStateAction<string[] | undefined>>,
  tasks:Task[],
  tags:Tag[]
}

export const useGetWeeklyPieChartData = ({setPieChartData, setPieChartLabel,setPieChartColor, tasks, tags}: useGetWeeklyPieChartDataProps) =>{
  const groupedByTagTasks = groupTasksByTag(tasks)

  const getWeeklyPieChartData = () =>{
    let pieChartData:number[] = []
    let tagsIds:string[] =[]
    Object.keys(groupedByTagTasks).forEach(tag => {
      const totalElapsedTime = calculateTotalElapsedTime(groupedByTagTasks[tag]);
      pieChartData.push(totalElapsedTime)
      tagsIds.push(tag)
    });
    const tagDetail = getTagDetailsByIds(tagsIds, tags)
    setPieChartData(pieChartData)
    setPieChartLabel(tagDetail.titles)
    setPieChartColor(tagDetail.colors)
  }

  return getWeeklyPieChartData
}