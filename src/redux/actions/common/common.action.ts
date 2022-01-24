import { Dispatch } from "redux"
import { ToastDanger, ToastSuccess, ToastWarning } from "../../service/toast.service";
import { CommonDispatchTypes, CommonTypes } from "../../types";

// SET LOADING
export const setLoading = (value: boolean) => async (dispatch: Dispatch<CommonDispatchTypes>) => {
    console.log(value)
    dispatch({ type: CommonTypes.SET_LOADING, payload: value})
}

export enum AlertTypes {
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    DANGER = 'DANGER'
}

export const setAlertMessage = (type: string, message: string): void => {
   switch (type) {
       case AlertTypes.SUCCESS:
            ToastSuccess(message);
            break;
        case AlertTypes.WARNING:
            ToastWarning(message);
            break;
        case AlertTypes.DANGER:
            ToastDanger(message);
            break;
       default:
           break;
   }
}