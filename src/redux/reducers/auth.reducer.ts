import { AuthDispatchTypes, AuthTypes } from "../types";

interface InitialStateI {
    loading?: boolean | null;
    token: string | null;
    user: {} | null;
    login_error?: boolean;
}


const initialState: InitialStateI = {
    loading: false,
    token: null,
    user: null,
};

const authReducer = (state: InitialStateI = initialState , action: AuthDispatchTypes ): InitialStateI => {
    
    switch (action.type)
    {
        case AuthTypes.AUTH_LOGIN_SUCCESS:
            return {
                token: action.payload.token,
                user: action.payload.user,
            }
        case AuthTypes.AUTH_LOGIN_ERROR:
            return {
                ...initialState,
                login_error: true
            }
        case AuthTypes.AUTH_LOGOUT:
            return {
                loading: false,
                token: null,
                user: null,
            }
        default:
            return state;
    }
}



export default authReducer

