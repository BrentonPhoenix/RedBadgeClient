import { Route, Redirect, RouteProps} from "react-router"
import Admin from '../admin/Admin'

type Props={
    sessionToken: any,
    role?: any
    state?: any
}
//if you use this method you have to pass the props from main to here to the user route.
//              ???change to role???
const AdminRoute = (props:Props) => {
    if(props.role === 'Admin'){
        return <Route path="/admin" ><Admin state={props.state}/></Route>
    }
    return(
        <Redirect to="/" />
    )}

export default AdminRoute
