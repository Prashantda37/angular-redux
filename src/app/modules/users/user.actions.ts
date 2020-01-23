import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Users } from "../../models/users.model";

export const USERS_LIST = "[USERS] GET LIST";

export class GetUsersList implements Action {
  readonly type = USERS_LIST;

  constructor(public payload: Users[]) {}
}

export type Actions = GetUsersList;
