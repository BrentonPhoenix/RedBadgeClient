import { Component } from "react";
import Login from "./Login";
import Register from "./Register";


type StateData={
    login: boolean,
    userUserID: string,
    username: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    sessionToken: string,
    postID?: string,
    topicID?: string,
    singleFetchReturn?: any,
    fetchReturn?: any
    password?: string,
    bio?: string,
    passwordKEY?: string,
}

type PropsType={
    state: StateData
}

type StateType={

}


class Auth extends Component <PropsType,StateType>{


    render(){
        return(
            <div>
                <Login state={this.props.state}/>
                <Register state={this.props.state}/>
            </div>
        )
    }
}

export default Auth