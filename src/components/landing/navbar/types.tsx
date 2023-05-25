export enum NavType{
    itemLink = 1,
    actionLogin = 2,
    actionLoggout = 3,
    itemLinkDashboard = 4
}
export type Navbaritem = {
    id: number
    name: string
    path?: string
    type: NavType
}
export type NavbarOptions = {
    items: Navbaritem[]
}