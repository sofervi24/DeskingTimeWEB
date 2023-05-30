export enum NavType{
    internalLink = 1,
    externallLink = 2,
}
export type Navbaritem = {
    id: number
    name: string
    path: string
    type: NavType
}
export type NavbarOptions = {
    items: Navbaritem[]
}