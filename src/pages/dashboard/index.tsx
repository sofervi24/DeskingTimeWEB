import { Link } from "react-router-dom"
import { ViewModel } from "./view-model"

const Main = () => {
    const {
        logged,
        logout
    } = ViewModel()
    if(logged){
        return (
            <div className="container">
                <h1>DASHBOARD</h1>
                <Link to={'/'}>Home</Link>
                <br />
                <a href="#" onClick={e => logout()}>Logout</a>
            </div>
        )
    }
    return (<br />)
}
export default Main