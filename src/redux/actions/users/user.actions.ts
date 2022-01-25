import { Dispatch } from "redux"
import { UserTypes, UserDispatchTypes, CommonDispatchTypes, CommonTypes } from "../../types";
import { UserService } from "./user.service";
import { ToastDanger } from "../../service/toast.service";


/** Get All Users */
export const getUsers = (page = 1, limit = 10, sort = "desc") => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {
    try {
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: true })

        const result = await UserService.getAllUsers(page, limit, sort);

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


/** User Delete */
export const deleteUserByLinkedInUrl = (linkedin_url: string) => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {
    try {
        
        await UserService.deleteUserByLinkedInUrl({ linkedin_url: linkedin_url });
        
        dispatch({ type: UserTypes.DELETE_LINKEDIN_USER_SUCCESS })

    } catch (err) {
        console.log(err);
    }
}