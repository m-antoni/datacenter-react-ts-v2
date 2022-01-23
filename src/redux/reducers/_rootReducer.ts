import { combineReducers } from "redux";

// reducers here
import authReducer from './auth.reducer';
import commonReducer from "./common.reducer";
import userReducer from "./user.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    common: commonReducer,
    user: userReducer,
})


export default rootReducer;