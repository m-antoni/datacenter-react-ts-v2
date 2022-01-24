import { UserTypes, UserDispatchTypes } from "../types";

interface InitialStateI {
    users?: any
    linkedin_url?: any
    error?: boolean
}

const initialState: InitialStateI = {};

const userReducer = (state: any = initialState , action: UserDispatchTypes) : InitialStateI => {

    switch (action.type) 
    {
        case UserTypes.GET_USERS_SUCCESS:
            return {
                users: action.payload
            }
        case UserTypes.GET_USER_LINKEDIN_SUCCESS:
            return {
                linkedin_url: action.payload
            }
        case UserTypes.GET_USER_LINKEDIN_ERROR:
            return {
                error: true
            }
        default:
            return state;
    }
}


export default userReducer