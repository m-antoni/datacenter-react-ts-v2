import { Dispatch } from "redux"
import { UserTypes, UserDispatchTypes, CommonDispatchTypes, CommonTypes, ArchiveRestoreTypes } from "../../types";
import { UserService } from "./user.service";
import { ToastDanger } from "../../service/toast.service";


/** Get All Users */
export const getUsers = (page = 1, limit = 10, sort = "desc") => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {
    try {
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: true })

        const result = await UserService.getAllUsers(page, limit, sort);

        console.log(result.data);

        dispatch({ type: UserTypes.GET_USERS_SUCCESS, payload: result.data });

        dispatch({ type: CommonTypes.SET_LOADING, payload: false })

    } catch (err) {
        console.log(err)
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
    }
}


/** Get User by linkedin_url */
export const getUserByLinkedInUrl = (linkedin_url: string) => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {
    try {

        dispatch({ type: CommonTypes.SET_LOADING, payload: true })
        
        const result = await UserService.getUserByLinkedInUrl(linkedin_url);

        if(result.data.data.length === 0)
        {
            /* Still SUCCESS if no data just send an empty data array with message, updated requested by Teff **/
            dispatch({ type: UserTypes.GET_USER_LINKEDIN_ERROR });
            dispatch({ type: CommonTypes.SET_LOADING, payload: false })
            ToastDanger('LinkedIn user not found!')
        }
        else 
        {
            dispatch({ type: UserTypes.GET_USER_LINKEDIN_SUCCESS, payload: result.data });
            dispatch({ type: CommonTypes.SET_LOADING, payload: false })
        }
        
    } catch (error) {
        console.log(error)
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
        dispatch({ type: UserTypes.GET_USER_LINKEDIN_ERROR });
    }
}


/** User Archive */
export const archiveOrRestoreUser = (linkedin_url: string, type: ArchiveRestoreTypes) => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {
    try {
        
        await UserService.archiveOrRestoreUser({ linkedin_url: linkedin_url, type: type });
        
        dispatch({ type: UserTypes.ARCHIVE_RESTORE_USER_SUCCESS })

    } catch (err) {
        console.log(err);
    }
}


/** Get Archive Users */
export const getAllArchiveUsers = (page = 1, limit = 10, sort = "desc") => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {
    try {
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: true })

        const result = await UserService.getAllArchiveUsers(page, limit, sort);

        dispatch({ type: UserTypes.GET_ARCHIVE_USER_SUCCESS, payload: result.data });

        dispatch({ type: CommonTypes.SET_LOADING, payload: false })

    } catch (err) {
        console.log(err)
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
    }
}


/** Get Single Setting */
export const getSingleSetting = (setting_name: string) => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {
    try {
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: true })

        const result = await UserService.getSingleSetting(setting_name);

        dispatch({ type: UserTypes.GET_SINGLE_SETTING_SUCCESS, payload: result.data.data });

        dispatch({ type: CommonTypes.SET_LOADING, payload: false })

    } catch (err) {
        console.log(err)
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
    }
}


/** Insert Excel Data */
export const insertExcelData = (excel_data: [], columns_to_fields: any) => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {

    try {
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: true })

        const postParams = {
            excel_data,
            columns_to_fields
        }

        const result = await UserService.insertExcelData(postParams);

        console.log(result.data)

        if(result.data.linkedin_urls.length > 0)
        {
            dispatch({ type: UserTypes.VALIDATE_EXCEL_DATA, payload: result.data.linkedin_urls }) // return linkedin_urls of exists users
        }else{
            dispatch({ type: UserTypes.INSERT_EXCEL_DATA_SUCCESS, payload: result.data.inserts }); // success inserts
        }
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })

    } catch (err) {
        console.log(err)
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
        dispatch({ type: UserTypes.INSERT_EXCEL_DATA_ERROR });
    }
}




/** Get Summary */
export const getSummary = () => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {

    try {
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: true })

        const result = await UserService.getSummary();

        dispatch({ type: UserTypes.GET_SUMMARY_SUCCESS, payload: result.data });
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })

    } catch (err) {
        console.log(err)
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
    }
}

