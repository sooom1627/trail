import { HabitType } from "../interface/Habit";

export const countTodoHabits = (habits:HabitType[]) =>{
  const todoHabits = habits.filter((habit:HabitType)=> habit.status === "todo" )
  return todoHabits.length
}