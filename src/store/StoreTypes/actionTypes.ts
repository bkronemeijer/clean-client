import {
  User,
  Household,
  Task
} from '../../Types/model'

export type StoreState = {
  users: User,
  households: Household,
  tasks: Task,
  // appState: Appstate
}

export type GetState = () => StoreState