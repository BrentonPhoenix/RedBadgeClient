import { Component } from "react";
import Bio from "./Bio";
class Profile extends Component{
    render(){
        return(
            <div>
                <h1>This is the Profile Component</h1>
                <Bio/>
            </div>
        )
    }
}

export default Profile