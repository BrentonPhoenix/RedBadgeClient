import { timingSafeEqual } from "crypto";
import { Component } from "react";
import { Link } from "react-router-dom";
import { isJSDocNullableType } from "typescript";
import DisplayMyTopics from "./DisplayMyTopics";
// import StateType from "../Props.State/StateType";


type StateData={
    login: boolean,
    userUserID: string,
    // username: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,

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
    sessionToken: string
    setTopicID: any
}

type StateType={
    TopicTitle: string ,
    url: string,
    Keywords: string,
    Active: boolean,
    fetchReturn?: any
}


class MyTopics extends Component <PropsType, StateType> {

    constructor(props: PropsType){
        super(props)
        this.state ={
            TopicTitle: "" ,
            url: "",
            Keywords: "",
            Active: true,
            fetchReturn: ['this']
        }
        // this.fetchMyTopics = this.fetchMyTopics.bind(this)
        this.postTopic = this.postTopic.bind(this)
    }

    
    componentDidMount(){
        fetch('http://localhost:4500/topic/mine', {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
          }).then(res => res.json())
          .then(json => this.setState({fetchReturn: json}))
        //   .then(() =>  this.props.setTopicID() )
        
        }

        componentDidUpdate(prevProps:any, prevState:any){

        }

    postTopic(event:any){
            event.preventDefault()
            fetch('http://localhost:4500/topic/create', {
                method: 'POST',
                body: JSON.stringify({TopicTitle: this.state.TopicTitle ,url: this.state.url, Keywords: this.state.Keywords, Active: this.state.Active}), 
                headers: new Headers({
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
            })
            .then(response =>response.json())
            // .then( data =>{this.props.updateToken(data.sessionToken); 
            //     this.fetchSetUserData()} )
            
            .catch((err:any)=> console.log(err))
    }

    


    changeHandlerImageURL(event: any){
        this.setState({url: event.target.value})
    }
 
    changeHandlerTitle(event: any){
        this.setState({TopicTitle: event.target.value})
    }

    changeHandlerKeywords(event: any){
        this.setState({Keywords: event.target.value})
    }


    render(){
        return(
            <div>
                <h1>This is the My Topics Component</h1>
                <div>
                    <form onSubmit={this.postTopic}>
                    <label htmlFor="ImageURL"/>
                    <input value={this.state.url} onChange={(e)=> this.changeHandlerImageURL(e)} type="text" placeholder='ImageURL' />
                    <br/>
                    <label htmlFor="title"/>
                    <input value={this.state.TopicTitle} onChange={(e)=> this.changeHandlerTitle(e)} type="text" placeholder="title"/>
                    <br/>
                    <label htmlFor="keywords"/>
                    <input value={this.state.Keywords} onChange={(e)=> this.changeHandlerKeywords(e)} type="text" placeholder="keywords" />
                    <br/>
                    <button type='submit'>Create Topic</button>
                    </form>
                    {/* <button onClick={()=> console.log(this.props.state.sessionToken)}>Console.log</button> */}
                </div>
                <div>
                    {this.state.fetchReturn !== ['this']?
                        this.state.fetchReturn.map((current:any, index:any)=> {
                            return(
                                <div key={index} onClick={e=> this.props.setTopicID(e,current.TopicID)} >
                                    {/* TopicID={current.TopicID} */}
                                    <Link to='/topic/' >
                                    <div >
                              <div>{current.url === ""? null: <img src={current.url} alt={current.urlImageID}/>}</div> 
                                <div>topic title:{current.TopicTitle}</div>
                                <div>{current.Keywords}</div>
                                <div>topic id: {current.TopicID}</div>
                            </div>
                            </Link>
                            
                            </div>
                        )
                    })
                    : null }
               {/* <DisplayMyTopics fetchReturn={this.state.fetchReturn}/> */}

                 <button onClick={()=> console.log(this.state.fetchReturn)}>Console.log(fetch)</button>
                 <br/>
                <button onClick={()=> console.log(this.props.sessionToken)}>Console.log(sessionToken)</button>
                </div>
            </div>
        )
    }
}


export default MyTopics