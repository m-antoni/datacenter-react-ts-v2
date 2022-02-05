import { UserTypes, UserDispatchTypes } from "../types";

interface InitialStateI {
    users?: any
    linkedin_url?: any
    archives?: any
    error?: boolean
    archive_restore_status?: boolean,
    collection_keys?: any,
    is_excel_save?: boolean,
    excel_save_data?: any,
    validate_excel?: any,
    summary?: any
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
        case UserTypes.INSERT_EXCEL_DATA_SUCCESS:
            return {
                is_excel_save: true,
                excel_save_data: action.payload
            }
        case UserTypes.INSERT_EXCEL_DATA_ERROR:
            return {
                is_excel_save: false
            }
        case UserTypes.VALIDATE_EXCEL_DATA:
            return {
                ...state,
                validate_excel: action.payload,
                is_excel_save: false
            }
        case UserTypes.GET_SUMMARY_SUCCESS:
            return {
                summary: action.payload
            }
        case UserTypes.CLEAR_USER_STATE:
            return {
                
            }
        default:
            return state;
    }
}


export default userReducer