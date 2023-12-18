import { getHabitsFromLocalStorage } from "../dataAcess/getHabitsFromLocalStorage"
import { saveHabitsToLocalStorage } from "../dataAcess/saveHabitsToLocalStorage"
import { HabitType } from "../interface/Habit"
import { initializeHabit } from "../utils/initializeHabit"


export const useLoadHabits = (setHabits: React.Dispatch<React.SetStateAction<HabitType[] | []>>) =>{
  
  const loadHabits = () =>{
    const cureentHabits = getHabitsFromLocalStorage()
    const initializedHabits = initializeHabit(cureentHabits)
    saveHabitsToLocalStorage(initializedHabits)
    setHabits(initializedHabits)
  }

  return loadHabits
}