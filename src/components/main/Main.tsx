import {Component} from "react";
import { Switch,Route} from "react-router";
import Home from "../home/Home";
import Topic from "../topic/Topic";
import Post from "../post/Post";
import Admin from "../admin/Admin";
import Profile from '../bio/Profile'
import MyTopics from "../topic/MyTopics";
import Header from "../header/Header";
import UserRoute from '../protected-routes.tsx/UserRoute'


type PropsType = {
  
}

type StateType = {
    login: boolean,
    userUserID: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    sessionToken: string,
    username?: string,
    postID?: any,
    TopicID?: string,
    singleFetchReturn?: any,
    fetchReturn?: any
    password?: string,
    bio?: string,
    passwordKEY?: string,
    


}


class Main extends Component <{}, StateType>{

    constructor(props:{}){
        super(props)
        this.state ={
            login: false,
            userUserID: "",
            isBanned: false,
            role: "",
            urlProfilePic: "",
            urlProfilePicAltID: "",
            sessionToken: "", 
            TopicID: " ",
            postID: ""
            // fetchReturn: []
            //eventual theme state goes here
        }
        this.updateToken = this.updateToken.bind(this)
        this.setTopicID = this.setTopicID.bind(this)
        this.setPostID = this.setPostID.bind(this)
    }

//   Register Props


  
  updateToken(newToken: any, uUID:any){
    localStorage.setItem('token', newToken)
    this.setState({sessionToken: newToken, userUserID: uUID})
    //add uUID to this in a bit
  }
  
  
  setTopicID(e:any,topicID: any){
    e.preventDefault()
    if(this.state.TopicID){
    this.setState({TopicID: topicID})}
  }

  setPostID=(e:any, postID: any)=>{

      if(true){
          this.setState({postID: postID})
      }
  }
  setLoginAndRole =( role: any)=>{
      if(true){
          this.setState({role: role})
              }
  }


  
    render(){
        return(
            <>
            <Header role={this.state.role} sessionToken={this.state.sessionToken}/>
                <Switch>
                    {/* <UserRoute role={this.state.role} sessionToken={this.state.sessionToken}/> */}
                    <Route exact path='/' ><Home setLoginAndRole={this.setLoginAndRole}  userUserID={this.state.userUserID} updateToken={this.updateToken}state={this.state} role={this.state.role}/></Route>
                    {/* handleSubmitRegister={this.handleSubmitRegister} fetchSetUserData={this.fetchSetUserData} changeHandlerUsername={this.changeHandlerUsername} changeHandlerPassword={this.changeHandlerPassword} */}
                    <Route  exact path='/profile' ><Profile state={this.state}/></Route>
                    <Route exact path='/topic/' ><Topic TopicID={this.state.TopicID} setPostID={this.setPostID} state={this.state} sessionToken={this.state.sessionToken}/></Route>
                    <Route exact path='/mytopics' ><MyTopics 
                     setTopicID={this.setTopicID} sessionToken={this.state.sessionToken} state={this.state}/></Route>
                    <Route exact path="/post" ><Post sessionToken={this.state.sessionToken} postID={this.state.postID} state={this.state}/></Route>
                    <UserRoute sessionToken={this.state.sessionToken} />
                    
                    <Route path="*" component={()=> <div>'404 page not found'</div>}/>
                </Switch>
            </>
        )
    }
}
export default Main