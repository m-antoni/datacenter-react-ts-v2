import { Dispatch } from "redux"
import { ToastDanger, ToastQuestion, ToastSuccess, ToastWarning } from "../../service/toast.service";
import { CommonDispatchTypes, CommonTypes } from "../../types";

// SET LOADING
export const setLoading = (value: boolean) => async (dispatch: Dispatch<CommonDispatchTypes>) => {
    console.log(value)
    dispatch({ type: CommonTypes.SET_LOADING, payload: value})
}