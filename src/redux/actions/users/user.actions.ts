import { Dispatch } from "redux"
import { UserTypes, UserDispatchTypes, CommonDispatchTypes, CommonTypes } from "../../types";
import { setLoading } from "../common/common.action";
import { UserService } from "./user.service";
import { useSelector, useDispatch } from 'react-redux';

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

        dispatch({ type: UserTypes.GET_USER_LINKEDIN_SUCCESS, payload: result.data });

        dispatch({ type: CommonTypes.SET_LOADING, payload: false })

    } catch (error) {
        console.log(error)
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
    }
}