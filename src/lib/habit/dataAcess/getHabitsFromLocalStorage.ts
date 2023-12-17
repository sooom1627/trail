import { HabitType } from "../interface/Habit";

export const getHabitsFromLocalStorage = () =>{
  const habitsStrings = localStorage.getItem("habits");
  try{
    const currentHabits = habitsStrings?(JSON.parse(habitsStrings).map((habit: HabitType) =>({
      ...habit,
      ininitialized:new Date(habit.initialized)
    }))as HabitType[] ):[]
    return currentHabits
  }catch(error){
    console.error('Failed to parse habits from localStorage', error);
    return [];
  }
}