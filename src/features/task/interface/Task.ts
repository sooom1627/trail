export interface Task {
  id : string;
  title : string;
  priority:"low"| "middle" | "high"
  created: Date;
}