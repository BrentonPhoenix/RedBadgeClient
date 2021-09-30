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
const UserRoute = (props:Props) => {
    if(props.sessionToken){
        return <Route path="/admin" ><Admin state={props.state}/></Route>
    }
    return(
        <Redirect to="/" />
    //     <Route {...routeProps} render={
    //         (props)=> {
    //            true
    //            ? <Component {...props}/>:
    //         <Redirect to='/'/>
    //     }
            
    //     }>

    //     </Route>
    // )
    )}

export default UserRoute
// export const UserRoute = ({component: Component, ...rest}:any) => {
//     return(
//         <Route {...rest} render={
//             (props)=> {
//                if()
//                 return Component
//             }
//         }>

//         </Route>
//     )
// }

// export default class UserRoute extends Component<{{component: Component, ...rest}, ...rest},StateType>{
//     render(){
//         return(
//             <Route {...rest} render={
//                             (props)=> {
//                                if(this.state.role === "User"){
//                                 return Component
//                             } else{
//                                 return <Redirect to={
//                                     pathname: '/',
//                                     state:{
//                                         from: props.location
//                                     }
//                                 }/>
//                             }
//                         }>
//             </Route>
//         )
//     }
// }