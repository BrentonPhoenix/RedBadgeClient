import { Component } from "react";
import Login from "./Login";
import Register from "./Register";

class Auth extends Component {

    render(){
        return(
            <div>
                <h1>This is the Auth component</h1>
                <Login/>
                <Register/>
            </div>
        )
    }
}

export default Auth