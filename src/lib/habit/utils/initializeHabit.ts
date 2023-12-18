import { HabitType } from "../interface/Habit";

export const initializeHabit = (habits:HabitType[]) =>{
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  const initializedHabits = habits.map((habit:HabitType)=>{
    const habitDate = new Date(habit.initialized);
    habitDate.setHours(0, 0, 0, 0); 
    if(habitDate.getTime() !== today.getTime()){
      return {...habit, status:'todo', initialized:today,}
    }else{
      return {...habit}
    }
  });

  return initializedHabits as HabitType[];
}