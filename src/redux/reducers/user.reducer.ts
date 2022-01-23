import { UserTypes, UserDispatchTypes } from "../types";


interface InitialStateI {
    loading: boolean
    users?: any
    user?: any
}

const initialState: InitialStateI = {
    loading: false
};

const userReducer = (state: any = initialState , action: UserDispatchTypes) : InitialStateI => {

    switch (action.type) 
    {
        case UserTypes.GET_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        default:
            return state;
    }
}


export default userReducer