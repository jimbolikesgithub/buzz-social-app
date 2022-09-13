// Type definitions file

export interface Buzz extends BuzzBody {
    
}

// Accessible for the client (client side, while buzz.js would be dev side)
export type BuzzBody = {
    text: string
    username: string
    profileImg: string
    image: string
}