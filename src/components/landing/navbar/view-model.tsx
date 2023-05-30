import { MouseEvent,useEffect,useState } from "react"

const Main = () => {
    const [toggled, setToggled] = useState(false)
    const buttonClicked = (e: MouseEvent) => {
        setToggled(!toggled)
    }
    return {
        toggled,
        buttonClicked,
    }
}

export default Main