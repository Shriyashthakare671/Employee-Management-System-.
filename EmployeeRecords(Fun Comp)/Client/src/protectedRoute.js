import { Route } from "react-router-dom";
import Login from "./login";

function ProtectedRoute(props) 
{
    let isUserLoggedIn = true;//Need to be checked with DB
    if(isUserLoggedIn)
        {
            return  <Route exact path={props.path} component={props.component}></Route>
        }
    else
        {
            return <Login></Login>;
        }
}

export default ProtectedRoute;