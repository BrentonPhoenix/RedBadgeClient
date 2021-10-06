import { Component } from "react";
import PropsType from "../Props.State/PropsType";
import { Link } from 'react-router-dom'
import { Grid } from "@mui/material"




type StateType = {
    login: boolean,
    userUserID: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    sessionToken?: string,
    username?: string,
    postID?: string,
    topicID?: string,
    singleFetchReturn?: any,
    fetchReturn?: any
    password?: string,
    bio?: string,
    passwordKEY?: string,
}

class Header extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            login: false,
            username: "",
            userUserID: "",
            password: '',
            isBanned: false,
            role: "",
            urlProfilePic: "",
            urlProfilePicAltID: "",

        }

    }

    clearToken() {
        localStorage.clear();
        this.setState({ sessionToken: "" })
        window.location.reload()
    }


    render() {
        return (
            <div style={{width: '100%'}}>
               
                <Grid container xs={12} bgcolor="#41733A" justifyContent="flex-end">
                    <Grid item sm={1} xs={2}  >
                {
                    this.props.role === "Admin" ? <Link to="/admin"><button>Admin</button></Link> : null

                }
                    </Grid>

                <Grid item sm={1} xs={2} >
                    <Link to="/"><button>Home</button></Link>
                    </Grid>
                <Grid item sm={1} xs={2} >
                    <Link to="/profile"><button>Profile</button></Link>
                    </Grid>
                <Grid item  sm={1} xs={2} >
                    <Link to="/mytopics"><button >Topics</button></Link>
                    </Grid>
                <Grid item sm={1} xs={2} >
                    <button onClick={e => this.clearToken()}>Logout</button>
                    </Grid>
                </Grid>  
            </div>
        )
    }
}

export default Header