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
class Admin extends Component<PropsType, StateType> {

    render(){
        return(
            <div>
                <h1>This is the Admin component</h1>
            </div>
        )
    }
}

export default Admin