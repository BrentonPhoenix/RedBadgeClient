import { Component } from "react";
import StateType from "../Props.State/StateType";



class AuthHome extends Component <{},StateType>{


    render(){
        return(
            <div>
                <div>
                    <div>
                        {/* this is a link to profilepage */}
                    </div>
                    <div>
                        {/* this is a link to my topics */}
                    </div>
                </div>
                <div>
                    {/* fetch all topics goes here */}
                </div>
            </div>
        )
    }
}

export default AuthHome