import { combineReducers } from "redux";

// reducers here
import authReducer from './auth.reducer';
import userReducer from "./user.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})


export default rootReducer;