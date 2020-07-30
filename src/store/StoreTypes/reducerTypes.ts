import { Task, CurrentTask } from "../../Types/model";

export type UserInStore = {
  token: string; id:number; name: string; email: string; loginSuccess: boolean; householdId: number; task: Task 
}

export type TaskInStore = {
  tasks: Task[]; currentTask: CurrentTask
}