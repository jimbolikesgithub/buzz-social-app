// Type definitions file

export interface Buzz extends BuzzBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string: 'buzz'
}

// Accessible for the client (client side, while buzz.js would be dev side)
export type BuzzBody = {
    text: string
    username: string
    profileImg: string
    image: string
}