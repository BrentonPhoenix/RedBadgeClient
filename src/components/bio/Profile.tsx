import { Component } from "react";
import Bio from "./Bio";
type StateType={


}

type PropsType ={
    state:{}
}

class Profile extends Component<PropsType,StateType>{
    render(){
        return(
            <div>
                <h1>This is the Profile Component</h1>
                <Bio state={this.props.state}/>
            </div>
        )
    }
}

export default Profile