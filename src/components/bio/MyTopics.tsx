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


class MyTopics extends Component <PropsType, StateType> {



    
    componentDidMount(){
        fetch('http://localhost:4500/topic/mine', {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                })
          }).then(res => res.json())
          .then(json => this.setState({fetchReturn: json}))
          .then(() => console.log(this.props.state.fetchReturn))
        }

    render(){
        return(
            <div>
                <h1>This is the My Topics Component</h1>
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
                    <button>Create Topic</button>
                    </form>
                </div>

                <div>
                    {/* map here to display my topics, make them links*/}
                </div>
            </div>
        )
    }
}


export default MyTopics