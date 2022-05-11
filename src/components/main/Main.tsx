import { Component } from "react";
import { Switch, Route } from "react-router";
import Box , {BoxProps} from '@mui/material/Box'
import Home from "../home/Home";
import Topic from "../topic/Topic";
import Post from "../post/Post";
import Profile from '../bio/Profile'
import MyTopics from "../topic/MyTopics";
import Header from "../header/Header";
import AdminRoute from '../protected-routes.tsx/AdminRoute'
import Footer from "../footer/Footer";




function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          p: 1,
          borderRadius: 1,
          textAlign: "center",
          fontSize: 19,
          fontWeight: "700",
          ...sx
        }}
        {...other}
      />
    );
  }




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


class Main extends Component<BoxProps, StateType>{

    constructor(props: BoxProps) {
        super(props)
        this.state = {
            login: false,
            userUserID: "",
            isBanned: false,
            role: "",
            urlProfilePic: "",
            urlProfilePicAltID: "",
            sessionToken: "",
            TopicID: " ",
            postID: " "
            //eventual theme state goes here
        }
        this.updateToken = this.updateToken.bind(this)
        this.setTopicID = this.setTopicID.bind(this)
        this.setPostID = this.setPostID.bind(this)
    }



    updateToken(newToken: any, uUID: any) {
        localStorage.setItem('token', newToken)
        this.setState({ sessionToken: newToken, userUserID: uUID })
    }


    setTopicID(e: any, topicID: any) {
        e.preventDefault()
        if (this.state.TopicID) {
            this.setState({ TopicID: topicID })
        }
    }

    setPostID = (e: any, postID: any) => {
        e.preventDefault()
        if (true) {
            this.setState({ postID: postID })
        }
    }
    setLoginAndRole = (role: any) => {
        if (true) {
            this.setState({role: role})
        }
    }



    render() {
        return (
            <div style={{width: '100%'}}>
                <Box
                sx={{
                    display: 'grid',
                    gridAutoColumns: '1fr',
                    gridAutoRows: '50px',
                    gap: 1,
                }}>
                <Item sx={{gridRow: 'span 1', gridColumn: "span 12", backgroundColor: '#41733A'}}>
                <Header role={this.state.role} sessionToken={this.state.sessionToken} />
                </Item>
                <Item sx={{gridRow: 'span 20', gridColumn: '2/12', backgroundColor: '#92BD80 ', border:" 5px solid black"}}>
                <Switch>
                    <Route exact path='/' ><Home setLoginAndRole={this.setLoginAndRole} userUserID={this.state.userUserID} updateToken={this.updateToken} state={this.state} role={this.state.role} /></Route>
                    <Route exact path='/profile' ><Profile state={this.state} /></Route>
                    <Route exact path='/topic/' ><Topic TopicID={this.state.TopicID} setPostID={this.setPostID} state={this.state} sessionToken={this.state.sessionToken} /></Route>
                    <Route exact path='/mytopics' ><MyTopics
                        setTopicID={this.setTopicID} sessionToken={this.state.sessionToken} state={this.state} /></Route>
                    <Route exact path="/post" ><Post sessionToken={this.state.sessionToken} postID={this.state.postID} state={this.state} /></Route>
                    <AdminRoute role={this.state.role} sessionToken={this.state.sessionToken} />

                    <Route path="*" component={() => <div>'404 page not found'</div>} />
                </Switch>
                </Item>
                </Box>
                <Footer></Footer>
            </div>
        )
    }
}
export default Main