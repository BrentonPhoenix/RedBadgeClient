import { Component } from "react";
// import StateType from "../Props.State/StateType";

type PropsType={
    state: {}
}

type StateType={

}
class Bio extends Component<PropsType, StateType>{
    render(){
        return(
            <div>
                <h1>This is the Bio Component</h1>
            </div>
        )
    }
}

export default Bio