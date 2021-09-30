import { Component } from "react";
// import StateType from "../Props.State/StateType";


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
    singleFetchReturn?: any,
    fetchReturn?: any
    password?: string,
    bio?: string,
    passwordKEY?: string,
}

type PropsType={
    state: StateData
    postID: any
    sessionToken: any
}

type StateType={
    singleFetchReturn: any,
    url: string,
    Keywords: string,
    content: string,
    title: string,
}

class Post extends Component <PropsType,StateType>{
    constructor(props: PropsType){
        super(props)
        this.state = {
            singleFetchReturn: [],
            url: "",
            Keywords: "",
            title: "",
            content: ""
        }
        // this.testPostFetch = this.testPostFetch.bind(this)
    }

    
    componentDidMount(){
        console.log(this.props.postID)
        fetch(`http://localhost:4500/posts/${this.props.state.postID}`, {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
          })
          .then(response => response.json())
          .then((json) => this.setState({singleFetchReturn: json}))
          .then(() => console.log(this.state.singleFetchReturn))
          .catch(err => console.log('There is an error in the get one post the error is: ' ,err))
        }

        // componentDidUpdate(){
        //     fetch(`http://localhost:4500/posts/${this.props.postID}`, {
        //             method: 'GET',
        //             headers: new Headers({ 
        //                 'Content-type': 'application/json',
        //                 'Authorization': `Bearer ${this.props.sessionToken}`
        //             })
        //       }).then(res => res.json())
        //       .then(json => this.setState({singleFetchReturn: json}))
        //       .then(() => console.log(this.state.singleFetchReturn))
        //       .catch(err => console.log('There is an error in the get one post the error is: ' ,err))
        //     }INFINITE LOOP!!!


        randomFucntion() {
            console.log('we are gteting props elsewhere why not')
            console.log(this.props.postID)
        }

        deletePost(){
        // console.log(this.props.postID)
        // this.props.postID ? console.log('we got an id') : console.log('what the heck');
        if(true){
            console.log("delete post")
        } else{
            console.log('rip me')
        }
        
        //     let postIDVariable = this.props.postID
        //     fetch(`http://localhost:4500/posts/delete/${postIDVariable}`, {
        //         method: 'DELETE',
        //         headers: new Headers({ 
        //             'Content-type': 'application/json',
        //             'Authorization': `Bearer ${this.props.state.sessionToken}`
        //         }) 
        //   })
        //   .then(res=> res.json())
        //   .then(data=> console.log(data))
        //   .catch(err => console.log('There is an error in the post delete the error is: ' ,err))
        }

        updatePost(event: any){
            event.preventDefault()
            fetch(`http://localhost:4500/posts/update/${this.props.postID}`, {
                method: 'PUT',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
          })
          .then(res=> res.json())
          .then(data=> console.log(data))
          .catch(err => console.log('There is an error in the post update the error is: ' ,err))
        }


        
        changeHandlerImageURL = (event: any) =>{
            this.setState({url: event.target.value})
        }
     
        changeHandlerTitle =(event: any) =>{
            this.setState({title: event.target.value})
        }
    
        changeHandlerKeywords =(event: any) =>{
            this.setState({Keywords: event.target.value})
        }
        changeHandlerContent =(event: any) =>{
            this.setState({content: event.target.value})
        }



        // testPostFetch(){
        //     fetch(`http://localhost:4500/posts/${this.props.postID}`, {
        //         method: 'GET',
        //         headers: new Headers({ 
        //             'Content-type': 'application/json',
        //             'Authorization': `Bearer ${this.props.sessionToken}`
        //         })
        //   }).then(res => res.json())
        //   .then(json => this.setState({singleFetchReturn: json}))
        //   .then(() => console.log(this.state.singleFetchReturn))
        //   .catch(err => console.log('There is an error in the get one post the error is: ' ,err))
        // }

        

    render(){
        return(
            <div>
                <h2>THis is the Post component</h2>Props PostID:
                {this.props.state.postID}
                <div>

                <br/>
                {this.state.singleFetchReturn.postID}
                {this.state.singleFetchReturn.postTitle}
                {this.state.singleFetchReturn.postContent}
                {this.state.singleFetchReturn.postKeywords}
                {this.props.sessionToken}
                {/* Content goes here */}
                <br/>
                <button onClick={this.updatePost}>update</button>
                <button onClick={this.randomFucntion}>delete</button>
                </div>
                {/* <button onClick={this.testPostFetch}>Fetch</button> */}
                <br/>
                <br/>
                <form onSubmit={this.updatePost}>
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
                    <button type='submit'>Create Post</button>
                    </form>
                <button onClick={e => console.log(this.props.state.postID)}>console.log postID</button>
                <button onClick={e => console.log(this.state.singleFetchReturn)}>console.log fetch return</button>
            </div>
        )
    }
}

export default Post