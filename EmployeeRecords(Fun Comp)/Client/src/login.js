import axios from "axios";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import './index.css';

function Login() {
    const history = useHistory();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");

    var url = "http://127.0.0.1:9900/signin";

    useEffect(() => {
        if (message !== "") {
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    }, [message]);

    const clearText = () => {
        setCredentials({ username: "", password: "" });
    }
    const doRegister = () => {
        setMessage("Register Page Under Work,Please Wait....");
        alert("Clicked on Register")
    }
    const doLogin = () => {
        debugger;

        axios.post(url, credentials).then((result) => {
            debugger;
            if (result.data.message === "failure") {
                setMessage("something wrong with server / credentials");
                clearText();
            }
            else {
                sessionStorage.setItem("jwtoken", result.data.jwtoken);
                history.push("/dashboard");
            }
        })
    }

    const onTextChange = (args) => {
        var copyOfcredentials = { ...credentials };
        copyOfcredentials[args.target.name] = args.target.value;
        setCredentials(copyOfcredentials);
    }

    return (
        <div >
            
            <h1>Sign In Here</h1>
            <table className="mytable2 justify-content-center mt-3">
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" name="username" placeholder="Enter Username"
                                value={credentials.username}
                                onChange={onTextChange} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>
                            <input type="password" name="password" placeholder="Enter Password"
                                value={credentials.password}
                                onChange={onTextChange} />
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <center>
                                <button className="btn btn-info mt-3" onClick={doRegister}>Register</button>
                            </center>
                        </td>
                        <td>
                            <center>
                                <button className="btn btn-success mt-3" onClick={doLogin}>Login</button>
                            </center>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr></hr>
            <h3 style={{ color: "red" }}>{message}</h3>
        </div>
    );


}

export default Login;