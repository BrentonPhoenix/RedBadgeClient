import { Component } from "react";
import Login from "./Login";
import Register from "./Register";


type StateData={
    login: boolean,
    userUserID: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    sessionToken: string,
    postID?: string,
    username?: string,
    topicID?: string,
    singleFetchReturn?: any,
    fetchReturn?: any
    password?: string,
    bio?: string,
    passwordKEY?: string,
}

type PropsType={
    state: StateData,
    updateToken: any
    setLoginAndRole: any,
    // handleSubmitRegister: any,
    // fetchSetUserData: (e:React.ChangeEvent<HTMLInputElement>) => void,
    // changeHandlerUsername: (e:React.ChangeEvent<HTMLInputElement>) => void,
    // changeHandlerPassword: (e:React.ChangeEvent<HTMLInputElement>) => void
}

type StateType={

}


class Auth extends Component <PropsType,StateType>{


    render(){
        return(
            <div>
                <Login setLoginAndRole={this.props.setLoginAndRole}  updateToken={this.props.updateToken} state={this.props.state}/>
                <Register   setLoginAndRole={this.props.setLoginAndRole}  updateToken={this.props.updateToken} state={this.props.state}/>
            </div>
        )
    }
}

export default Auth