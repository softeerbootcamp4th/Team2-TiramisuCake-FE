import { USER_ACTION, UserAction, UserState } from "../types/userTypes";

const userReducer = (state: UserState, action: UserAction): UserState => {
    switch(action.type) {
        case USER_ACTION.LOGIN_USER:
            return {...state, isLoggedIn: true};
        case USER_ACTION.LOGOUT_USER:
            return {...state, isLoggedIn: false};
        default:
            return state;
    }
}

export default userReducer;