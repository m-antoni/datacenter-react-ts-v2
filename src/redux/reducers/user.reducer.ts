import { UserTypes, UserDispatchTypes } from "../types";

interface InitialStateI {
    users?: any
    linkedin_url?: any
    archives?: any
    error?: boolean
    archive_restore_status?: boolean,
    collection_keys?: any
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
        case UserTypes.ARCHIVE_RESTORE_USER_SUCCESS:
            return {
                archive_restore_status: true
            }
        case UserTypes.GET_USER_LINKEDIN_ERROR:
            return {
                error: true
            }
        case UserTypes.GET_ARCHIVE_USER_SUCCESS:
            return {
                archives: action.payload
            }
        case UserTypes.GET_SINGLE_SETTING_SUCCESS:
            return {
                collection_keys: action.payload
            }
        default:
            return state;
    }
}


export default userReducer