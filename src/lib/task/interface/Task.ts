export interface Task {
  id : string;
  title : string;
  priority:"Lowest"| "Low"| "Middle" | "High"| "Highest"
  status:"todo" | "doing"| "pause" | "done"
  created: Date;
  startTime?: Date;
  endTime?: Date;
  pauses?:{pause: Date, restart?:Date}[];
  tag:string| undefined
}