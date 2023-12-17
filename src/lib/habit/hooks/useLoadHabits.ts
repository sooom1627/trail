import { getHabitsFromLocalStorage } from "../dataAcess/getHabitsFromLocalStorage"
import { HabitType } from "../interface/Habit"


export const useLoadHabits = (setHabits: React.Dispatch<React.SetStateAction<HabitType[] | []>>) =>{
  
  const loadHabits = () =>{
    const cureentHabits = getHabitsFromLocalStorage()
    setHabits(cureentHabits)
  }

  return loadHabits
}