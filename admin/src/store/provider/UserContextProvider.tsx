import { PropsWithChildren, useMemo, useReducer } from "react";
import userReducer from "../reducer/userReducer";
import { USER_ACTION } from "../types/userTypes";
import { initialUser, UserContext } from "../context/useUserContext";

function UserContextProvider({children} : PropsWithChildren) {
    const [user, dispatch] = useReducer(userReducer, initialUser);

    const login = () => {
        dispatch({type: USER_ACTION.LOGIN_USER});
    }

    const logout = () => {
        dispatch({type: USER_ACTION.LOGOUT_USER});
    }

    const context = useMemo(() => ({user, login, logout}),[user]);

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;