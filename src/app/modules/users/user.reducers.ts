import { Action } from "@ngrx/store";
import { Users } from "../../models/users.model";
import * as Actions from "./user.actions";

const initialState: Users[] = [
  { id: 1, name: "Prashant", description: "description herer" }
];

export function reducerUser(
  state: Users[] = initialState,
  action: Actions.Actions
) {
  switch (action.type) {
    case Actions.USERS_LIST:
      return action.payload;
    default:
      return state;
  }
}
