import { combineReducers } from "redux";

// reducers here
import authReducer from './auth.reducer';


const rootReducer = combineReducers({
    auth: authReducer
})


export default rootReducer;