export interface Habit{
  id:string
  status:"todo" | "done",
  initialized: Date
}