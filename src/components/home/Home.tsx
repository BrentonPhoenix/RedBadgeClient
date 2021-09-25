import React, {Component} from "react";
import Auth from "../auth/Auth"
import Header from "../header/Header";
//define our state up here
type StateType = {
    login: boolean,
    username: string,
    password: string,

}
//define our props up here
type PropsType = {

}


class Home extends Component <PropsType, StateType> {
    constructor(props: PropsType){
        super(props)
        this.state =({
            login: false,
            username: "",
            password: "",
            //eventual theme state goes here
        })
    }

//fetch all topics where communityLocked = false on render

    render(){
        return(
            <div className="main">
                <Header/>
                <h1>This is the home component</h1>
                <Auth/>
            </div>
        )
    }
}

export default Home