import {createStore, applyMiddleware} from "redux";
import rootReducer from "./redux/reducers/_rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>

export default store

 