export interface Game {
    _id: string,
    title: string,
    summary: string,
    developer: string,
    genre: string,
    type: string,
    imgPath?: string,    
    rating: number,
    user_id: string
}