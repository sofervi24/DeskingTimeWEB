import { Navbaritem } from "../../components/landing/navbar/types"
import { PricingItem } from '../../components/landing/pricing/types'

export const ViewModel = () => {
    const getMenuItems = ():Navbaritem[] => {
        const items:Navbaritem[] = [
            {id: 1,name: "Home", path: "/"},
            {id: 2,name: "About", path: "/about"},
            {id: 3,name: "Contact", path: "/contact"},
            {id: 4,name: "Login", path: "/login"},
        ]
        return items
    }

    const getPricingItems = (): PricingItem[] => {
        const items: PricingItem[] = [
            {
                id: 1,
                name: 'Freelancer',
                monthly: 9.99,
                yearly: 113.87,
                discount: 5,
                details: [
                    {id:1, text: '1 User'},
                    {id:2, text: '1 Year of Backups'},
                    {id:3, text: 'Basic Invoices'},
                ]
            },
            {
                id: 2,
                name: 'Team',
                monthly: 19.99,
                yearly: 215.89,
                discount: 10,
                details: [
                    {id:1, text: '5 Users'},
                    {id:2, text: '3.99/month per extra user'},
                    {id:3, text: '3 Year of Backups'},
                    {id:4, text: 'Profesional Invoices'},
                    {id:5, text: 'Basic Reports'},
                ]
            },
            {
                id: 3,
                name: 'Company',
                monthly: 99.99,
                yearly: 1019.90,
                discount: 15,
                details: [
                    {id:1, text: '50 Users'},
                    {id:2, text: '1.99/month per extra user'},
                    {id:3, text: 'Backups forever'},
                    {id:4, text: 'Profesional Invoices'},
                    {id:5, text: 'Profesinal Reports'},
                ]
            },
        ]
        return items
    }

    return {
        getMenuItems,
        getPricingItems,
    }
}
