import { Component } from "react";
// import StateType from "../Props.State/StateType";


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

class Post extends Component <PropsType,StateType>{


    
    componentDidMount(){
        fetch(`http://localhost:4500/posts/${this.props.state.postID}`, {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                })
          }).then(res => res.json())
          .then(json => this.setState({singleFetchReturn: json}))
          .then(() => console.log(this.props.state.singleFetchReturn))
          .catch(err => console.log('There is an error in the get one post the error is: ' ,err))
        }


        deletePost(){
            fetch(`http://localhost:4500/posts/${this.props.state.postID}`, {
                method: 'DELETE',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.state.sessionToken}`
                })
          })
          .then(res=> res.json())
          .then(data=> console.log(data))
          .catch(err => console.log('There is an error in the post delete the error is: ' ,err))
        }

        updatePost(){
            fetch(`http://localhost:4500/posts/${this.props.state.postID}`, {
                method: 'PUT',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.state.sessionToken}`
                })
          })
          .then(res=> res.json())
          .then(data=> console.log(data))
          .catch(err => console.log('There is an error in the post update the error is: ' ,err))
        }

    render(){
        return(
            <div>
                {/* picture title keywords*/}
                {/* edit and delete  */}
                {/* Content goes here */}
            </div>
        )
    }
}

export default Post