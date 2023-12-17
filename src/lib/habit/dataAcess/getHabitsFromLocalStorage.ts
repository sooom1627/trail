import { Habit } from "../interface/Habit";

export const getHabitsFromLocalStorage = () =>{
  const habitsStrings = localStorage.getItem("habits");
  try{
    const currentHabits = habitsStrings?(JSON.parse(habitsStrings).map((habit: Habit) =>({
      ...habit,
      ininitialized:new Date(habit.initialized)
    }))as Habit[] ):[]
    return currentHabits
  }catch(error){
    console.error('Failed to parse habits from localStorage', error);
    return [];
  }
}