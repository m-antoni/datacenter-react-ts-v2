import { UserTypes, UserDispatchTypes } from "../types";

interface InitialStateI {
    users?: any
    linkedin_url?: any
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
        default:
            return state;
    }
}


export default userReducer