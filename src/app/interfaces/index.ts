export interface Index {
}
export interface ShowEvent{
    id?:number,
    name: string,
    date: Date,
    description: string,
    place?: string,
    price: number,
    time: string,
    artist: string,
    image?:string
}
