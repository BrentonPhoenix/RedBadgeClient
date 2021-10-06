import { Component } from "react";
import { Link } from "react-router-dom";
import APIURL from '../../helpers/environment'
import {Button } from "@mui/material"

type StateData={
    login: boolean,
    userUserID: string,
    // username: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    sessionToken: string,
    postID?: string,
    topicID?: string,
    // singleFetchReturn?: any,
    // fetchReturn?: any
    password?: string,
    bio?: string,
    passwordKEY?: string,
}

type PropsType={
    state: StateData
    TopicID: any
    sessionToken: any
    setPostID: any
}

type StateType={
    fetchReturn: any
    singleFetchReturn: any
    url: string
    title: string
    Keywords: string
    content: string,
    TopicTitle: string
    TopicURL: string
    TopicKeywords: string
}

class Topic extends Component <PropsType, StateType>{
    constructor(props: PropsType){
        super(props)
        this.state={
            fetchReturn: ['this'],
            singleFetchReturn: [" "] ,
            url: "",
            title: "",
            Keywords: "",
            content: "",
            TopicTitle: "",
            TopicURL: "",
            TopicKeywords: ""
        }
        this.createPost = this.createPost.bind(this)
        this.updateTopic = this.updateTopic.bind(this)
        this.deleteTopic = this.deleteTopic.bind(this)
    }



    
    componentDidMount(){
        fetch(`${APIURL}/topic/${this.props.TopicID}`, {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
          }).then(res => res.json())
          .then(json => this.setState({singleFetchReturn: json}))
          .then(() => console.log(this.state.singleFetchReturn))

          fetch(`${APIURL}/posts/${this.props.TopicID}`, {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
          }).then(res => res.json())
          .then(json => this.setState({fetchReturn: json}))
          .then(con=> console.log(con))
          
        }


        deleteTopic(event: any){
            event.preventDefault()
            fetch(`${APIURL}/topic/delete/${this.props.TopicID}`, {
                method: 'DELETE',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
          })
          .then(res=> res.json())
          .then(data=> console.log(data))
          .catch(err => console.log('There is an error in the topic delete the error is: ' ,err))
        }

        updateTopic(event: any){
            event.preventDefault()
            fetch(`${APIURL}/topic/update/${this.props.TopicID}`, {
                method: 'PUT',
                body: JSON.stringify({TopicTitle: this.state.TopicTitle ,url: this.state.TopicURL, Keywords: this.state.TopicKeywords}),
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
          })
          .then(res=> res.json())
          .then(data=> console.log(data))
          .catch(err => console.log('There is an error in the topic update the error is: ' ,err))



          fetch(`${APIURL}/topic/${this.props.TopicID}`, {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
          }).then(res => res.json())
          .then(json => this.setState({singleFetchReturn: json}))
          .then(() => console.log(this.state.singleFetchReturn))
        }


        createPost(event: any){
            event.preventDefault()
            fetch(`${APIURL}/posts/create`, {
                method: 'POST',
                body: JSON.stringify({url: this.state.url, postTitle: this.state.title, postKeywords: this.state.Keywords, postContent: this.state.content, topicID: this.props.TopicID}),
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.state.sessionToken}`
                })
          })
          .then(res=> res.json())
          .then(data=> console.log(data))
          .catch(err => console.log('There is an error in the topic create the error is: ' ,err))
        }


        changeHandlerImageURL(event: any){
            this.setState({url: event.target.value})
        }
     
        changeHandlerTitle(event: any){
            this.setState({title: event.target.value})
        }
    
        changeHandlerKeywords(event: any){
            this.setState({Keywords: event.target.value})
        }
        changeHandlerContent(event: any){
            this.setState({content: event.target.value})
        }

        
    changeHandlerTopicImageURL(event: any){
        this.setState({TopicURL: event.target.value})
    }
 
    changeHandlerTopicTitle(event: any){
        this.setState({TopicTitle: event.target.value})
    }

    changeHandlerTopicKeywords(event: any){
        this.setState({TopicKeywords: event.target.value})
    }


    

    render(){
        return(
            <div>
                <div>
                    
                <h1>This is the Topic Component</h1>
                <div>{this.state.singleFetchReturn[0].TopicTitle}</div>
                <div>{this.state.singleFetchReturn[0].Keywords}</div>
                <div>{this.state.singleFetchReturn[0].TopicID}</div>
                </div>
                <div>
                    <p>this is the Topic that is displayed</p>
                    <div>
                    <form onSubmit={this.updateTopic}>
                    <label htmlFor="ImageURL"/>
                    <input value={this.state.TopicURL} onChange={(e)=> this.changeHandlerTopicImageURL(e)} type="text" placeholder='ImageURL' />
                    <br/>
                    <label htmlFor="title"/>
                    <input value={this.state.TopicTitle} onChange={(e)=> this.changeHandlerTopicTitle(e)} type="text" placeholder="title"/>
                    <br/>
                    <label htmlFor="keywords"/>
                    <input value={this.state.TopicKeywords} onChange={(e)=> this.changeHandlerTopicKeywords(e)} type="text" placeholder="keywords" />
                    <br/>
                    <br/>
                    <Button type="button" size="medium" variant="contained" color="info">update</Button>
                    </form>
                  
                </div>
                    <br/>
                    <Button type="button" size="medium" variant="contained" color="warning" onClick={this.deleteTopic}>delete</Button>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <form onSubmit={this.createPost}>
                    <label htmlFor="ImageURL"/>
                    <input value={this.state.url} onChange={(e)=> this.changeHandlerImageURL(e) }type="text" placeholder='ImageURL' />
                    <br/>
                    <label htmlFor="title"/>
                    <input value={this.state.title} onChange={(e)=> this.changeHandlerTitle(e)} type="text" placeholder="title"/>
                    <br/>
                    <label htmlFor="keywords"/>
                    <input value={this.state.Keywords} onChange={(e)=> this.changeHandlerKeywords(e)} type="text" placeholder="keywords" />
                    <br/>
                    <label htmlFor="content"/>
                    <input value={this.state.content} onChange={(e)=> this.changeHandlerContent(e)} type="text" placeholder="content" />
                    <br/>
                    <br/>
                    <Button type="submit" size="medium" variant="contained" color="info">Create Post</Button>
                    </form>
                </div>
                <div>
                {
                this.state.fetchReturn !== ['this']?
                        this.state.fetchReturn.map((current:any, index:any)=> {
                            return(
                                <div key={index} onClick={(e)=> this.props.setPostID(e,current.postID)} >
                                    <Link to='/post'>
                                    <div >
                              <div>{current.url === ""? null: <img src={current.url} alt={current.urlAltID} height='auto' width='75px'/>}</div> 
                                <div>{current.postTitle}</div>
                                <div>{current.postKeywords}</div>
                                <div>{current.postContent}</div>
                                <div>{current.postID}</div>
                            </div>
                           </Link>
                            {console.log(current)}
                            </div>
                        )
                    })
                    : null
                     }
                </div>
                <button onClick={e=> console.log(this.props.TopicID)}>console.log TopicID</button>
                <button onClick={e=> console.log(this.props.state.sessionToken)}>console.log sessionToken</button>
           
            </div>
        )
    }
}

export default Topic