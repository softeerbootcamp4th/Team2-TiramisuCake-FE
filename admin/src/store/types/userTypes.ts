import { Dispatch } from "react";

export interface UserState {
    isLoggedIn: boolean;
}

export const enum USER_ACTION {
    LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER',
}

export type UserAction = 
| {type: USER_ACTION.LOGIN_USER}
| {type: USER_ACTION.LOGOUT_USER};

export type UserDispatch = Dispatch<UserAction>;