export interface HabitType{
  id:string,
  title:string,
  status:"todo" | "done",
  initialized: Date
}