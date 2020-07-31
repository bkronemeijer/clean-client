export type User = {
  id: number
  name: string
  email: string
  password: string
  isAdmin: boolean
  householdId: number
  successes: number
  fails: number
}

export type Household = {
  id: number
  nickName: string
  startDate: Date
  recurrence: number
}

export type HouseholdWithUsers = {
  id: number
  nickName: string
  startDate: Date
  recurrence: number
  users: User[]
}

export type Task = {
  id: number
  title: string
  description: Text
  householdId: number
  userId: number
  length: number
}

export type CurrentTask = {
  id: number
  deadline: Date
  isDone: boolean
  task: Task
  userId: number
  taskId: number
  length: number
}

export type Message = {
  variant: string;
  dismissable: boolean;
  text: string;
};

export type AppState = {
  loading: Boolean;
  message: Message | null;
};