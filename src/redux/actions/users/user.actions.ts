import { Dispatch } from "redux"
import { UserTypes, UserDispatchTypes, CommonDispatchTypes, CommonTypes } from "../../types";
import { setLoading } from "../common/common.action";
import { UserService } from "./user.service";

export const getUsers = (page = 1, limit = 10, sort = "desc") => async (dispatch: Dispatch<UserDispatchTypes | CommonDispatchTypes>) => {
    try {
        
        dispatch({ type: CommonTypes.SET_LOADING, payload: true })

        const result = await UserService.getAllUsers(page, limit, sort);

        dispatch({ type: UserTypes.GET_USER_SUCCESS, payload: result.data });

        dispatch({ type: CommonTypes.SET_LOADING, payload: false })

    } catch (err) {
        console.log(err)
        dispatch({ type: CommonTypes.SET_LOADING, payload: false })
        // dispatch({ type: UserTypes.GET_USER_ERROR })
    }
}
