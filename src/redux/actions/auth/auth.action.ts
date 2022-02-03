import { AuthDispatchTypes, AuthTypes, CommonDispatchTypes, CommonTypes } from "../../types";
import { AuthService } from "./auth.service";
import { Dispatch } from "redux";
import { removeUserSession, setUserSession } from "../../../utils/helpers";
import { ToastDanger } from "../../service/toast.service";

/** Auth Login */
export const authLogin = (username: string, password: string) => async (dispatch: Dispatch<AuthDispatchTypes | CommonDispatchTypes>) => {
    try {
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: true })

        const result = await AuthService.authLogin({ username, password });
    
        dispatch({ type: AuthTypes.AUTH_LOGIN_SUCCESS, payload: result.data })
        
        setUserSession(result.data);

        // dispatch({ type: CommonTypes.SET_LOADING, payload: false })
        
    } catch (err) {
        console.log(err);
        dispatch({ type: AuthTypes.AUTH_LOGIN_ERROR })
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
        ToastDanger("Please enter correct username & password.")
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





