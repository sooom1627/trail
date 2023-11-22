export interface Task {
  id : string;
  title : string;
  priority:"lowest"| "low"| "middle" | "high"| "highest"
  status:"todo" | "doing"| "done"
  created: Date;
}