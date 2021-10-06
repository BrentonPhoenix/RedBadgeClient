import { Component } from "react";
import Auth from "../auth/Auth"
import StateType from "../Props.State/StateType";
import Box, { BoxProps } from '@mui/material/Box'
import APIURL from '../../helpers/environment'




function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: "#DCE4CA",
                color: "black",
                p: 1,
                // borderRadius: 1,
              
                fontSize: 19,
                fontWeight: "700",
                ...sx
            }}
            {...other}
        />
    );
}

type StateData = {
    login: boolean,
    userUserID: string,
    role: string,
    isBanned: boolean,
    urlProfilePic: string,
    urlProfilePicAltID: string,
    sessionToken: string,
    username?: string,
    postID?: string,
    topicID?: string,
    singleFetchReturn?: any,
    fetchReturn?: any
    password?: string,
    bio?: string,
    passwordKEY?: string,
}

type PropsType = {
    state: StateData,
    updateToken: any,
    userUserID: any,
    setLoginAndRole: any,
    role: any,
}

class Home extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            login: false,
            userUserID: "",
            role: "",
            isBanned: false,
            urlProfilePicAltID: "",
            urlProfilePic: "",
            sessionToken: "",
            fetchReturn: []
        }
        //     // this.communityLockedTopics = this.communityLockedTopics.bind(this)
    }




    componentDidMount() {
        fetch(`${APIURL}/topic/public`, {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json',
                // 'Authorization': `Bearer ${this.props.state.sessionToken}`
            })
        }).then(res => res.json())
            .then(json => this.setState({ fetchReturn: json }))
            .then(() => console.log(this.state.fetchReturn))
    }
    // componentDidUpdate(){
    //     console.log(this.state.fetchReturn)
    // }
    //fetch all topics where communityLocked = false on render








    render() {
        return (
            <div className="main">
                {
                    this.props.state.sessionToken
                    ?
                    <div>
                    <h1>You are Logged In!</h1>
                    <h4>At some point this will hold:</h4>
                    {/* Auth Home goes here */}
                    <ul>
                        <li>A link to My Profile</li>
                        <li>A link to My topics</li>
                        <li>A fetch will all topics that exist</li>
                    </ul>
                    </div>
                    :
                <Box
                    sx={{
                        display: 'grid',
                        gridAutoColumns: '1fr',
                        gridAutoRows: '45px',
                        gap: 1,


                    }}>
                    <Item sx={{gridRow: 'span 6', gridColumn: "span 12"}}>
                        <Auth setLoginAndRole={this.props.setLoginAndRole} updateToken={this.props.updateToken} state={this.props.state} />
                    </Item>
                    <Item sx={{gridRow: 'span  10', gridColumn: "span 12"}}>
                    {
                        this.state.fetchReturn.map((current: any, index: any) => {
                            return (
                                <div key={index}>
                                    <Box sx={{gridRow: 'span 1', gridColumn: 'span 12'}}>
                                    <Item >{current.url === "" ? null : <img src={current.url} alt={current.urlImageID} height='auto' width='75px' />}</Item>
                                    <Item>{current.TopicTitle}</Item>
                                    <Item>{current.Keywords}</Item>
                                    </Box>
                                </div>
                            )
                        })
                    }
                    </Item>

                </Box>
    }
            </div>
        )
    }
}

export default Home