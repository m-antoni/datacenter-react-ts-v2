import { Dispatch } from "redux"
import { CommonDispatchTypes, CommonTypes } from "../../types";

// SET LOADING
export const setLoading = (value: boolean) => async (dispatch: Dispatch<CommonDispatchTypes>) => {
    console.log(value)
    dispatch({ type: CommonTypes.SET_LOADING, payload: value})
}