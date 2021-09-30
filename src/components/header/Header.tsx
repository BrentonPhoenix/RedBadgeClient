import { Component } from "react";
import PropsType from "../Props.State/PropsType";
// import StateType from "../Props.State/StateType";
import {Link, Redirect } from 'react-router-dom'


type StateType ={
    login: boolean,
    userUserID: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    sessionToken?: string,
    username?: string,
    postID?: string,
    topicID?: string,
    singleFetchReturn?: any,
    fetchReturn?: any
    password?: string,
    bio?: string,
    passwordKEY?: string,
}

class Header extends Component <PropsType, StateType> {
//contains 4 buttons that link to home, profile, create topic, and logout. ALSO ADD protected route to an empty mod options page! Need at least two types of users to meet the Definition of Done.
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
        // sessionToken: ""
    }

}

clearToken(){
    localStorage.clear();
    this.setState({sessionToken: ""})
    window.location.reload()
  }

  
    render(){
        return(
            <div className="mainHeader">
                <h1>This is the header component</h1>
                 <Link to="/admin"><button>Admin</button></Link>
            {/* {this.props.role ? */}
                <div> 
                
                 <Link to="/"><button>Home</button></Link>
                 <Link to="/profile"><button>Profile</button></Link>
                 <Link to="/mytopics"><button>My Topics</button></Link>
                 <button onClick={e => this.clearToken()}>Logout</button>
              
                </div>
            {/* : null} */}
            </div>
        )
    }
}

export default Header