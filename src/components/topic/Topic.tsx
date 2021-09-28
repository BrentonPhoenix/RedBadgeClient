import { Component } from "react";

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

class Topic extends Component <PropsType, StateType>{



    
    componentDidMount(){
        fetch(`http://localhost:4500/topic/${this.props.state.topicID}`, {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                })
          }).then(res => res.json())
          .then(json => this.setState({singleFetchReturn: json}))
          .then(() => console.log(this.props.state.singleFetchReturn))

          fetch(`http://localhost:4500/posts/mine`, {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                })
          }).then(res => res.json())
          .then(json => this.setState({fetchReturn: json}))
          .then(() => console.log(this.props.state.fetchReturn))
        }


        deleteTopic(){
            fetch(`http://localhost:4500/topic/${this.props.state.topicID}`, {
                method: 'DELETE',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.state.sessionToken}`
                })
          })
          .then(res=> res.json())
          .then(data=> console.log(data))
          .catch(err => console.log('There is an error in the topic delete the error is: ' ,err))
        }

        updateTopic(){
            fetch(`http://localhost:4500/topic/${this.props.state.topicID}`, {
                method: 'PUT',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.state.sessionToken}`
                })
          })
          .then(res=> res.json())
          .then(data=> console.log(data))
          .catch(err => console.log('There is an error in the topic update the error is: ' ,err))
        }


        createTopic(){
            fetch(`http://localhost:4500/topic/create`, {
                method: 'POST',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.props.state.sessionToken}`
                })
          })
          .then(res=> res.json())
          .then(data=> console.log(data))
          .catch(err => console.log('There is an error in the topic create the error is: ' ,err))
        }

    render(){
        return(
            <div>
                <h1>This is the Topic Component</h1>
                <div>
                    {/* this Div will contain: a topic 'card' which has delete and update buttons...somewhere */}
                </div>
                <div>
                    <form>
                    <label htmlFor="ImageURL"/>
                    <input type="text" placeholder='ImageURL' />
                    <br/>
                    <label htmlFor="title"/>
                    <input type="text" placeholder="title"/>
                    <br/>
                    <label htmlFor="keywords"/>
                    <input type="text" placeholder="keywords" />
                    <br/>
                    <label htmlFor="content"/>
                    <input type="text" placeholder="content" />
                    <br/>
                    <button>Create Topic</button>
                    </form>
                </div>
                <div>
                    {/* this div will contain post 'cards' which will be links */}
                </div>
            </div>
        )
    }
}

export default Topic