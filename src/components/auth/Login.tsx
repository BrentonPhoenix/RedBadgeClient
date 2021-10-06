import { Component } from "react";
import APIURL from '../../helpers/environment'
import {Button} from "@mui/material"


type StateData = {
    login: boolean,
    userUserID: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    sessionToken: string,
    username?: string,
    postID?: string,
    topicID?: string,
    singleFetchReturn?: any,
    fetchReturn?: any
    password?: string,
    bio?: string,
    passwordKEY?: string,
}

type PropsType = {
    state: StateData,
    updateToken: any
    setLoginAndRole: any
}

type StateType = {
    userUserID: string,
    login: boolean,
    username: string,
    password: string,
    role: string,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    isBanned: boolean,

}


class Login extends Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props)
        this.state = {    
            userUserID: "",
            login: false,
            username: "",
            password: "",
            role: "",
            urlProfilePic: "",
            urlProfilePicAltID: "",
            isBanned: false,

        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event: any) {
        event.preventDefault()
        fetch(`${APIURL}/users/login`, {
            method: 'POST',
            body: JSON.stringify({ username: this.state.username, password: this.state.password }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(data => {
                this.props.updateToken(data.sessionToken)
                this.fetchSetUserData(data.sessionToken)
            })
            .catch((err: any) => console.log(err))
    }



    fetchSetUserData(sessionToken: string) {
        fetch(`${APIURL}/users/`, {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': `Bearer ${sessionToken}`
            })
        }).then(res => res.json())
            .then(json => this.props.setLoginAndRole(json[1]))
    }



    changeHandlerUsername(event: any) {
        this.setState({ username: event.target.value })
    }
    changeHandlerPassword(event: any) {
        this.setState({ password: event.target.value })
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" value={this.state.username} onChange={(event) => this.changeHandlerUsername(event)} />
                    <br />
                    <label htmlFor="username">Password</label>
                    <br />
                    <input type="password" value={this.props.state.password} onChange={(event) => this.changeHandlerPassword(event)} />
                    <br />
                    <br />
                    <Button type="submit" size="medium" variant="contained" color="success">Login</Button>
                </form>
            </div>
        )
    }
}

export default Login