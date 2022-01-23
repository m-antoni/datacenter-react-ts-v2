import axios from "axios";
import { Dispatch } from "redux"
import http from "../../service/api.http"
import { UserTypes, UserDispatchTypes } from "../../types";
import { UserService } from "./user.service";


export const getUsers = (page = 1, limit = 10, sort = "desc") => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        const result = await UserService.getAllUsers(page, limit, sort);

        dispatch({ type: UserTypes.GET_USER_SUCCESS, payload: result.data });

    } catch (err) {
        console.log(err)
        // dispatch({ type: UserTypes.GET_USER_ERROR })
    }
}
