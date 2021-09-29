import { Component } from "react";
// import PropsType from "../Props.State/PropsType";
// import StateType from "../Props.State/StateType";



type StateData={
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

type PropsType={
    state: StateData,
    updateToken: any
}

type StateType={
    userUserID: string,
        login: boolean,
        username: string,
        password: string,
        role: string,
        urlProfilePic: string,
        urlProfilePicAltID: string,
        isBanned: boolean,
        sessionToken: string
}


class Login extends Component <PropsType,StateType>{
constructor(props: PropsType){
    super(props)
    this.state = {     //PROBABLY need to import it into Main and then pass these as props?
        userUserID: "",
        login: false,
        username: "",
        password: "",
        role: "",
        urlProfilePic: "",
        urlProfilePicAltID: "",
        isBanned: false,
        sessionToken: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.props.updateToken = this.updateToken.bind(this)
}

    handleSubmit(event: any) {
        event.preventDefault()
        fetch('http://localhost:4500/users/login', {
            method: 'POST',
            body: JSON.stringify({username: this.state.username ,password: this.state.password}), 
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then( data => {
            this.props.updateToken(data.sessionToken)
            console.log(data)
        })
        .catch((err:any)=> console.log(err))
    }

    changeHandlerUsername(event:any){
        this.setState({username: event.target.value})
    }
    changeHandlerPassword(event: any){
        this.setState({password: event.target.value})
    }


    // updateToken(newToken: any){
    //     localStorage.setItem('token', newToken)
    //     this.setState({ sessionToken: newToken})
    //   }

    render(){
        return(
            <div>
                <h1>This is the Login component</h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <br/>
                <input type="text" value={this.state.username} onChange={(event) => this.changeHandlerUsername(event)}/>
                <br/>
                <label htmlFor="username">Password</label>
                <br/>
                <input type="password" value={this.props.state.password} onChange={(event) => this.changeHandlerPassword(event)}/>
                <br/>
                <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login