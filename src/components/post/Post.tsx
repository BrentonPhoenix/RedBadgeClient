import APIURL from '../../helpers/environment'
import { Component } from "react";
import {Button} from '@mui/material'

type StateData = {
    login: boolean,
    userUserID: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    sessionToken: string,
    postID?: string,
    topicID?: string,
    singleFetchReturn?: any,
    fetchReturn?: any

}

type PropsType = {
    state: StateData
    postID: any
    sessionToken: any
}

type StateType = {
    singleFetchReturn: any,
    url: string,
    Keywords: string,
    content: string,
    title: string,
}

class Post extends Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
            singleFetchReturn: [],
            url: "",
            Keywords: "",
            title: "",
            content: ""
        }
    }


    componentDidMount() {
        fetch(`${APIURL}/posts/${this.props.state.postID}`, {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        })
            .then(response => console.log(response.json()))
            .then(json => this.setState({ singleFetchReturn: json }))
            .then(() => console.log(this.state.singleFetchReturn))
            .catch(err => console.log('There is an error in the get one post the error is: ', err))
    }

    deletePost = () => {
        let postIDVariable = this.props.postID
        fetch(`${APIURL}/posts/delete/${postIDVariable}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this.props.state.sessionToken}`
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log('There is an error in the post delete the error is: ', err))
    }

    updatePost = (event: any) => {
        event.preventDefault()
        fetch(`${APIURL}/posts/update/${this.props.postID}`, {
            method: 'PUT',
            body: JSON.stringify({ url: this.state.url, postTitle: this.state.title, postKeywords: this.state.Keywords, postContent: this.state.content }),
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log('There is an error in the post update the error is: ', err))
    }



    changeHandlerImageURL = (event: any) => {
        this.setState({ url: event.target.value })
    }

    changeHandlerTitle = (event: any) => {
        this.setState({ title: event.target.value })
    }

    changeHandlerKeywords = (event: any) => {
        this.setState({ Keywords: event.target.value })
    }
    changeHandlerContent = (event: any) => {
        this.setState({ content: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>This is the Post component</h2>Props PostID:
                {this.props.state.postID}
                <div>
                    {/* {this.state.singleFetchReturn.postID} */}
                    {/* {this.state.singleFetchReturn} */}
                    {/* {this.state.singleFetchReturn[0].postContent} */}
                    {/* {this.state.singleFetchReturn.postKeywords} */}
                    {/* Content goes here */}
                    <br/>
                    <Button onClick={this.deletePost} type="submit" size="medium" variant="contained" color="warning">delete</Button>
                </div>
                {/* <button onClick={this.testPostFetch}>Fetch</button> */}
                <br />
                <br />
                <form onSubmit={this.updatePost}>
                    <label htmlFor="ImageURL" />
                    <input value={this.state.url} onChange={(e) => this.changeHandlerImageURL(e)} type="text" placeholder='ImageURL' />
                    <br />
                    <label htmlFor="title" />
                    <input value={this.state.title} onChange={(e) => this.changeHandlerTitle(e)} type="text" placeholder="title" />
                    <br />
                    <label htmlFor="keywords" />
                    <input value={this.state.Keywords} onChange={(e) => this.changeHandlerKeywords(e)} type="text" placeholder="keywords" />
                    <br />
                    <label htmlFor="content" />
                    <input value={this.state.content} onChange={(e) => this.changeHandlerContent(e)} type="text" placeholder="content" />
                    <br />
                    <br />
                    <Button type="submit" size="medium" variant="contained" color="info">Update Post</Button>
                </form>
                <br/>
                <button onClick={e => console.log(this.props.state.postID)}>console.log postID</button>
                <button onClick={e => console.log(this.state.singleFetchReturn)}>console.log fetch return</button>
            </div>
        )
    }
}

export default Post