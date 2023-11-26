export interface Task {
  id : string;
  title : string;
  priority:"Lowest"| "Low"| "Middle" | "High"| "Highest"
  status:"todo" | "doing"| "done"
  created: Date;
  startTime?: Date;
  endTime?: Date;
}