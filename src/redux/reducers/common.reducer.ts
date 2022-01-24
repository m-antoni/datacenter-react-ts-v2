import { CommonTypes, CommonDispatchTypes } from "../types";

interface InitialStateI {
   loading: boolean | null;
}

const initialState: InitialStateI = {
    loading: false,
};

const commonReducer = (state: any = initialState , action: CommonDispatchTypes) : InitialStateI => {

    switch (action.type) 
    {
        case CommonTypes.SET_LOADING:
            return {
                loading: action.payload
            }
        default:
            return state;
    }
}


export default commonReducer