import React, {Component} from "react"
import { Route, Redirect, RouteProps} from "react-router"
import StateType from "../Props.State/StateType"
import Admin from '../admin/Admin'

type Props={
    sessionToken: any,
    role?: any
    state?: any
}
//if you use this method you have to pass the props from main to here to the user route.
//              ???change to role???
const TemplateRoute = (props:Props) => {
    if(props.sessionToken){
        return <Route path="/admin" >
            {/*COMPONENT GOES HERE <Admin state={props.state}/> */}
            </Route>
    }
    return(
        <Redirect to="/" />
    )}

export default TemplateRoute
