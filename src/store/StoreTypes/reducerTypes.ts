import { Task, CurrentTask } from "../../Types/model";

export type UserInStore = {
  token: string; id:number; isAdmin: boolean; name: string; email: string; loginSuccess: boolean; householdId: number; task: Task 
}

export type TaskInStore = {
  tasks: Task[]; currentTasks: Task[]; currentTask: CurrentTask
}