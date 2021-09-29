import {Component} from "react";
import { Switch,Route} from "react-router";
import Home from "../home/Home";
import Topic from "../topic/Topic";
import Post from "../post/Post";
import Admin from "../admin/Admin";
import Profile from '../bio/Profile'
import MyTopics from "../topic/MyTopics";
import Header from "../header/Header";



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
    postID?: string,
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
            postID: " "
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

  setPostID(e:any, postID: string){
      e.preventDefault()
      if(this.state.postID){
          this.setState({postID: postID})
      }
  }


  
    render(){
        return(
            <>
            <Header sessionToken={this.state.sessionToken}/>
                <Switch>
                    <Route exact path='/' ><Home  userUserID={this.state.userUserID} updateToken={this.updateToken}state={this.state}/></Route>
                    {/* handleSubmitRegister={this.handleSubmitRegister} fetchSetUserData={this.fetchSetUserData} changeHandlerUsername={this.changeHandlerUsername} changeHandlerPassword={this.changeHandlerPassword} */}
                    <Route exact path='/profile' ><Profile state={this.state}/></Route>
                    <Route exact path='/topic/' ><Topic TopicID={this.state.TopicID} setPostID={this.setPostID} state={this.state} sessionToken={this.state.sessionToken}/></Route>
                    <Route exact path='/mytopics' ><MyTopics 
                     setTopicID={this.setTopicID} sessionToken={this.state.sessionToken} state={this.state}/></Route>
                    <Route exact path="/post" ><Post postID={this.state.postID} state={this.state}/></Route>
                    <Route path="/admin" ><Admin state={this.state}/></Route>
                    <Route path="*" component={()=> <div>'404 page not found'</div>}/>
                </Switch>
            </>
        )
    }
}
export default Main