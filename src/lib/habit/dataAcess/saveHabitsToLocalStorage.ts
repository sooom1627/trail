import { HabitType } from "../interface/Habit";

export const saveHabitsToLocalStorage = (updatedHabits:HabitType[]) =>{
  try{
    localStorage.setItem("habits", JSON.stringify(updatedHabits))
  }catch(error){
    console.error('Failed to save habits to localStorage', error);
  }
}