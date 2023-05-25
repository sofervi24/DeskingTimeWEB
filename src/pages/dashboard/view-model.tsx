import { useEffect, useState } from "react"
import { User } from "../../models/user"
import { useNavigate } from "react-router-dom"


export const ViewModel = () => {
    const user: User = new User()
    const navigate = useNavigate()
    const [logged,setLogged] = useState(false)

    useEffect(() => {
        user.validate()
            .then(resp => {
                console.log("validate",resp)
                if(resp === true){
                    setLogged(true)
                }else{
                    navigate('/')
                }
            })
    },[])


    const logout = () => {
        const choice = window.confirm('Do you want to log out?')
        if(choice){
            user.logout()
            setLogged(false)
            navigate('/')
        }
    }

    return {
        logged,
        logout
    }
}