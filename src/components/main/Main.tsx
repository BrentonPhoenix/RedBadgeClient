import React, {Component} from "react";
import { Switch,Route,Redirect} from "react-router";
// import { UserRoute } from "../protected-routes.tsx/UserRoute";
// import Bio from "../bio/Bio";
import Home from "../home/Home";
import Topic from "../topic/Topic";
import Post from "../post/Post";
import Admin from "../admin/Admin";
import Profile from '../bio/Profile'
// import PropsType from "../Props.State/PropsType";
import StateType from "../Props.State/StateType";
import MyTopics from "../bio/MyTopics";


type PropsType = {
  
}

class Main extends Component <{}, StateType>{

    constructor(props:{}){
        super(props)
        this.state =({
            login: false,
            username: "",
            password: "",
            userUserID: "",
            isBanned: false,
            role: "",
            urlProfilePic: "",
            urlProfilePicAltID: "",
            sessionToken: "", 
            //eventual theme state goes here
        })
    }

  
    render(){
        return(
            <>
                <Switch>
                    <Route exact path='/' ><Home state={this.state}/></Route>
                    <Route exact path='/profile' ><Profile state={this.state}/></Route>
                    <Route exact path='/topic' ><Topic state={this.state}/></Route>
                    <Route exact path='/mytopics' ><MyTopics state={this.state}/></Route>
                    <Route exact path="/post" ><Post state={this.state}/></Route>
                    <Route path="/admin" ><Admin state={this.state}/></Route>
                    <Route path="*" component={()=> <div>'404 page not found'</div>}/>
                </Switch>
            </>
        )
    }
}
export default Main