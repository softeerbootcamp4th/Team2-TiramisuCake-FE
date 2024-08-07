import { createContext } from "react";
import { UserState } from "../types/userTypes";

export const initialUser: UserState = {
    isLoggedIn: false,
};

export const UserContext = createContext<{
    user: UserState,
    login: () => void;
    logout: () => void;
}>({
    user: initialUser,
    login: () => null,
    logout: () => null,
    
});
