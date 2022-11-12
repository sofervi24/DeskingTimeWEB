import React from "react"
import Navbar from '../../components/navbar/index'
import Header from '../../components/landing-header/index'
import { Navbaritem } from "../../components/navbar/types"
const Main = () => {
    const menuItems: Navbaritem[] = [
        {id: 1,name: "Home"},
        {id: 2,name: "About Us"},
        {id: 3,name: "Login"},
    ]
    return (
        <React.Fragment>
            <Navbar items={menuItems} />
            <Header />
        </React.Fragment>
    )
}

export default Main