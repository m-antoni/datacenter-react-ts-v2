import { UserTypes, UserDispatchTypes } from "../types";

interface InitialStateI {
    users?: any
    user?: any
}

const initialState: InitialStateI = {};

const userReducer = (state: any = initialState , action: UserDispatchTypes) : InitialStateI => {

    switch (action.type) 
    {
        case UserTypes.GET_USER_SUCCESS:
            return {
                users: action.payload
            }
        default:
            return state;
    }
}


export default userReducer