export interface QuickTask{
  id:string
  title:string,
  status:"todo" | "done",
  created:Date,
  ended?:Date,
}