import { Component } from "react";
// import PropsType from "../Props.State/PropsType";
// import StateType from "../Props.State/StateType";

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

class Register extends Component<PropsType, StateType> {
    constructor(props: PropsType){
        super(props)
        this.state ={
            login: false,
            username: "",
            userUserID: "",
            password: '',
            isBanned: false,
            role: "",
            urlProfilePic: "",
            urlProfilePicAltID:"",
            sessionToken: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateToken = this.updateToken.bind(this)
        // this.setState = this.setState.bind(this)
        this.fetchSetUserData = this.fetchSetUserData.bind(this)
    }

    handleSubmit(event:any) {
        event.preventDefault()
        fetch('http://localhost:4500/users/register', {
            method: 'POST',
            body: JSON.stringify({username: this.props.state.username ,password: this.props.state.password}), 
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response =>response.json())
        .then( data =>{this.updateToken(data.sessionToken); 
            this.fetchSetUserData()} )
     
        .catch((err:any)=> console.log(err))
    }
        
    changeHandlerUsername(event:any){
        this.setState({username: event.target.value})
        // console.log(this.state.username)
    }
    changeHandlerPassword(event: any){
        this.setState({password: event.target.value})
        // console.log(this.state.password)
    }

    updateToken(newToken: any){
        localStorage.setItem('token', newToken)
        this.setState({sessionToken: newToken})
      }
    fetchSetUserData(){
        fetch('http://localhost:4500/users/',{
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.state.sessionToken}`
                })
          }).then(res => res.json())
          .then(json => this.setState({login: true,role: json[1]}))
        //   .then(e=>console.log('this.state.role ',this.state))
      }
    
    //   componentDidMount(){
    //       fetch('http://localhost:4500/users/',{
    //             method: 'GET',
    //             headers: new Headers({ 
    //                 'Content-type': 'application/json',
    //                 'Authorization': `Bearer ${this.state.sessionToken}`
    //             })
    //       }).then(res => res.json())
    //       .then(json => console.log(json))
    //   }


    render(){
        return(
            <div>
                <h1>This is the register component</h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <br/>
                <input type="text" value={this.props.state.username} onChange={(event) => this.changeHandlerUsername(event)}/>
                <br/>
                <label htmlFor="username">Password</label>
                <br/>
                <input type="password" value={this.props.state.password} onChange={(event) => this.changeHandlerPassword(event)}/>
                <br/>
                <button type="submit">Register</button>
                </form>
                {/* {console.log(this.state)} this has the odd effect of printing the password to the console. Which makes sense since it's reading the value of this.state.password along with everything else. They ARE getting properly hashed*/}
            </div>
        )
    }
}

export default Register