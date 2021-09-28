import { Component } from "react";
import StateType from "../Props.State/StateType";

class Topic extends Component <{}, StateType>{



    
    componentDidMount(){
        fetch('http://localhost:4500/topic/mine', {
                method: 'GET',
                headers: new Headers({ 
                    'Content-type': 'application/json',
                })
          }).then(res => res.json())
          .then(json => this.setState({fetchReturn: json}))
          .then(() => console.log(this.state.fetchReturn))
          
        }

    render(){
        return(
            <div>
                <h1>This is the Topic Component</h1>
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
            </div>
        )
    }
}

export default Topic