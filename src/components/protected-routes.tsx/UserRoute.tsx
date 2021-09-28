import React, {Component} from "react"
import { Route, Redirect, RouteProps} from "react-router"
import StateType from "../Props.State/StateType"
export {}




const UserRoute = ({component: Component, ...rest}:any) => {
    // let role = this.state.role
    return(
        <Route {...rest} render={
            (props)=> {
               true
               ? <Component {...props}/>:
            <Redirect to='/'
            />}
            
        }>

        </Route>
    )
}
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