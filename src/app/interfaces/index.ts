export interface Index {
}
export interface ShowEvent{
    id:string,
    name: string,
    date: string,
    description: string,
    place?: string,
    price: number,
    time: string,
    artist?: string,
    image?:string
}
export interface BougthEvent{
    id:string,
    name:string,
    date:string,
    mailUser:string
}
