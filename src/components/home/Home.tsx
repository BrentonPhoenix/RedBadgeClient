import React, {Component} from "react";
import Auth from "../auth/Auth"
// import Header from "../header/Header";
// import PropsType from "../Props.State/PropsType";
// import StateType from "../Props.State/StateType";
// import DisplayFetch from "./DisplayFetch";

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

class Home extends Component <PropsType, StateType> {
    constructor(props:PropsType){
        super(props)
        this.state ={
            login: false,
            userUserID: "",
            username: "",
            role: "",
            isBanned: false,
            urlProfilePic: "",
            urlProfilePicAltID: "",
            sessionToken: '',
            fetchReturn: []
        }
        // this.communityLockedTopics = this.communityLockedTopics.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:4500/topic/public', {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.state.sessionToken}`
                })
          }).then(res => res.json())
          .then(json => this.setState({fetchReturn: json}))
          .then(() => console.log(this.props.state.fetchReturn))
        }
        // componentDidUpdate(){
        //     console.log(this.state.fetchReturn)
        // }
//fetch all topics where communityLocked = false on render

    render(){
        return(
            <div className="main">
                
                <Auth state={this.props.state} />
                {
                    this.props.state.fetchReturn.map((current:any, index:any)=> {
                        return(
                            <div key={index}>
                              <div>{current.url === ""? null: <img src={current.url} alt={current.urlImageID}/>}</div> 
                                <div>{current.TopicTitle}</div>
                                <div>{current.Keywords}</div>
                            </div>
                        )
                    })
                }
                {/* <DisplayFetch fetch={this.state.fetchReturn}/> */}
            </div>
        )
    }
}

export default Home