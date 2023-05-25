import React from "react"
import Navbar from '../../components/landing/navbar/index'
import Header from '../../components/landing/header/index'
import Content from '../../components/landing/container/index'
import Footer from '../../components/landing/footer/index'
import Pricing from '../../components/landing/pricing/index'
import { ViewModel } from "./view-model"
const Main = () => {
    const { 
        getMenuItems, 
        getPricingItems 
    } = ViewModel()
    return (
        <React.Fragment>
            <Navbar items={getMenuItems()} />
            <Header />
            <Content>
                <React.Fragment>
                    <div className="text-center mb-5">
                        <h2>Our plans</h2>
                        <p>Choose the option better fits your needs</p>
                    </div>
                    <div className="row">
                        {getPricingItems().map( item => (
                            <Pricing 
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                monthly={item.monthly}
                                yearly={item.yearly}
                                discount={item.discount}
                                details={item.details}
                            />
                        ))}
                    </div>
                </React.Fragment>
            </Content>
            <Footer />
        </React.Fragment>
    )
}

export default Main