export type User = {
  id: number
  name: string
  email: string
  password: string
  isAdmin: boolean
  householdId: number
}

export type Household = {
  id: number
  nickName: string
  startDate: Date
  recurrence: number
}

export type Task = {
  id: number
  title: string
  description: Text
  householdId: number
  userId: number
}