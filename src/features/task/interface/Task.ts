export interface Task {
  id : string;
  title : string;
  priority:"lowest"| "low"| "middle" | "high"| "highest"
  created: Date;
}