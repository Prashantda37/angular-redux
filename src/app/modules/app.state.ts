import { Users } from "../models/users.model";

export interface AppState {
  readonly users: Users[];
}
