export type PlanDetail = {
    id: number
    text: string
}
export type PricingItem = {
    id: number
    name: string
    monthly: number
    yearly: number
    discount: number
    details: PlanDetail[]
}