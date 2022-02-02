import { Route, Navigate } from "react-router-dom";
import Login from "../components/auth/Login";
import PageNotFound from "../components/PageNotFound";
import { getToken } from "./helpers";

interface Props {
    component: React.ComponentType
    path?: string
}

const PrivateRoute: React.FC<Props> = ({ component: Component }) :any => {

    const token = getToken();

    if(token){
        return <Component/>
    }

    return <Navigate to="/login"/>

}


export default PrivateRoute;

