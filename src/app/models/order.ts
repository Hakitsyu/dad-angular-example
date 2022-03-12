export interface Order {
    id: number,
    date: string,
    status: number
}

export interface OrderStatus {
    id: number,
    title: string
}

export interface OrdersMemory {
    status: OrderStatus,
    orders: Order[] 
}