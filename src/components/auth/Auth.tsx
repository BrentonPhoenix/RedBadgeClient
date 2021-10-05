import { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import { Grid } from "@mui/material";

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
                <Grid container justifyContent='space-evenly' >
                    <Grid item xs={6} border='5px solid black' padding="0px 0px 50px 0px" >
                <Login  setLoginAndRole={this.props.setLoginAndRole}  updateToken={this.props.updateToken} state={this.props.state}/>
                </Grid>
                <Grid item xs={6} border='5px solid black' padding="0px 0px 50px 0px">
                <Register   setLoginAndRole={this.props.setLoginAndRole}  updateToken={this.props.updateToken} state={this.props.state}/>
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default Auth