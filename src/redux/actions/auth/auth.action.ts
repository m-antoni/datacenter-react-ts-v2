import { AuthDispatchTypes, AuthTypes, CommonDispatchTypes, CommonTypes } from "../../types";
import { AuthService } from "./auth.service";
import { Dispatch } from "redux";
import { removeUserSession, setUserSession } from "../../../utils/helpers";

/** Auth Login */
export const authLogin = (username: string, password: string) => async (dispatch: Dispatch<AuthDispatchTypes | CommonDispatchTypes>) => {
    try {
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: true })

        const result = await AuthService.authLogin({ username, password });
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })

        dispatch({ type: AuthTypes.AUTH_LOGIN_SUCCESS, payload: result.data })

        console.log(result.data);

        setUserSession(result.data);


    } catch (err) {
        console.log(err);
        dispatch({ type: AuthTypes.AUTH_LOGIN_ERROR })
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
    }
}


/** Auth Logout */
export const authLogout = () => async (dispatch: Dispatch<AuthDispatchTypes | CommonDispatchTypes>) => {
    try {
       
        dispatch({ type: AuthTypes.AUTH_LOGOUT });
        removeUserSession();

    } catch (err) {
        console.log(err);
    }
}





