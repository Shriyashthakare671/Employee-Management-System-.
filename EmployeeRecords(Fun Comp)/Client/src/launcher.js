
import { Route, Switch } from 'react-router-dom';
import NotFound from "./NotFound";
import About from "./about";
import Contact from "./contact";
import Dashboard from './dashboard';
import Footer from "./footer";
import Header from "./header";
import Login from "./login";
import ProtectedRoute from "./protectedRoute";


function Launcher() {
    return (<>

        <Header></Header>
        <hr></hr>
        

        <hr></hr>
        <Switch>
            <ProtectedRoute exact path="/" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            {/* <Route exact path="/login" component={Login}></Route> */}
            <Route exact path="/about" component={About}></Route>
            <ProtectedRoute exact path="/contact" component={Contact} />
            <Route exact path="*" component={NotFound}></Route>
        </Switch>

        <hr></hr>
        <Footer></Footer>
    </>);

}
export default Launcher;