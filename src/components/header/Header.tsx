import { Component } from "react";
import PropsType from "../Props.State/PropsType";
import { Link } from 'react-router-dom'
import { Grid } from "@mui/material";
import {Button} from "@mui/material"




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
                    <Grid item xs={1}  >
                {
                    this.props.role === "Admin" ? <Link to="/admin"><Button size="medium" color="warning" variant="contained">Admin</Button></Link> : null

                }
                    </Grid>

                <Grid item xs={1} >
                    <Link to="/"><Button size="medium" variant="contained" color="info">Home</Button></Link>
                    </Grid>
                <Grid xs={1} >
                    <Link to="/profile"><Button size="medium" variant="contained" color="info">Profile</Button></Link>
                    </Grid>
                <Grid item  xs={1}>
                    <Link to="/mytopics"><Button size="medium" variant="contained" color="info">Topics</Button></Link>
                    </Grid>
                <Grid item xs={1}>
                    <Button size="medium" variant="contained" color="info" onClick={e => this.clearToken()}>Logout</Button>
                    </Grid>
                </Grid>  
            </div>
        )
    }
}

export default Header