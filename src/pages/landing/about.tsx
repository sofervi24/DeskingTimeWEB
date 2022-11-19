import React from "react"
import Navbar from '../../components/landing/navbar/index'
import Header from '../../components/landing/header/index'
import Content from '../../components/landing/container/index'
import Footer from '../../components/landing/footer/index'
import { ViewModel } from "./view-model"
const Main = () => {
    const { getMenuItems } = ViewModel()
    return (
        <React.Fragment>
            <Navbar items={getMenuItems()} />
            <Header />
            <Content>
                <React.Fragment>
                    <div className="text-center mb-5">
                        <h2>About</h2>
                    </div>
                </React.Fragment>
            </Content>
            <Footer />
        </React.Fragment>
    )
}

export default Main