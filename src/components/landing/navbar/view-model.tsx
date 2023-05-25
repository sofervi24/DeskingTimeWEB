import { MouseEvent,useEffect,useState } from "react"
import { User } from "../../../models/user"

const Main = () => {
    const user: User = new User()
    const [logged,setLogged] = useState(false)
    const [toggled, setToggled] = useState(false)
    useEffect(() => {
        user.validate()
        .then(resp => {
            if(resp === true){
                setLogged(true)
            }
        })
    },[])

    const buttonClicked = (e: MouseEvent) => {
        setToggled(!toggled)
    }
    return {
        toggled,
        logged, 
        buttonClicked,
    }
}

export default Main