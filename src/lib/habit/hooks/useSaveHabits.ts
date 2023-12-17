import { v4 as uuidv4 } from 'uuid';
import { getHabitsFromLocalStorage } from '../dataAcess/getHabitsFromLocalStorage';
import { HabitType } from '../interface/Habit';
import { saveHabitsToLocalStorage } from '../dataAcess/saveHabitsToLocalStorage';

export const useSaveHabits = (setHabits: React.Dispatch<React.SetStateAction<HabitType[]>>) =>{
  const saveHabits = (habit:HabitType | string, actionType:"create"|"toggleStatus"|"edit", editTitle?:string,) =>{
    const currentHabits = getHabitsFromLocalStorage()
    switch(actionType){
    case "create":
      if(typeof habit === 'string'){
        const newHabits: HabitType = {
          id: uuidv4(),
          title: habit,
          status:"todo",
          initialized:new Date()
        }
        const updatedHabits = [...currentHabits, newHabits]
        saveHabitsToLocalStorage(updatedHabits)
        setHabits(updatedHabits)
      }
      break
    case "toggleStatus":
      if(typeof habit !== 'string'){
        const updatedHabits = currentHabits.map((habitItem:HabitType)=>{
          if(habitItem.id ===habit.id ){
            return{
              ...habitItem,
              status:habitItem.status === "done"?"todo":"done",
              initialized:new Date(habitItem.initialized)
            }
          }else{
            return{
              ...habitItem,
              initialized:new Date(habitItem.initialized)
            }
          }
        }) as HabitType[]
  
        saveHabitsToLocalStorage(updatedHabits)
        setHabits(updatedHabits)
      }
      break
    case "edit":
      if(typeof habit !== 'string'){
        const updatedHabits = currentHabits.map((habitItem:HabitType)=>{
          if(habitItem.id ===habit.id ){
            return{
              ...habitItem,
              title:editTitle,
              initialized:new Date(habitItem.initialized)
            }
          }else{
            return{
              ...habitItem,
              initialized:new Date(habitItem.initialized)
            }
          }
        }) as HabitType[]
  
        saveHabitsToLocalStorage(updatedHabits)
        setHabits(updatedHabits)
      }
      break
    }
  }

  return saveHabits
}