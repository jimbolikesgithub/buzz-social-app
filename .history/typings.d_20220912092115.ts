// Type definitions file

// Coming back from sanity
export interface Buzz extends BuzzBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'buzz'
    blockTweet: boolean
}

// Accessible for the client (client side, while buzz.js would be dev side)
export type BuzzBody = {
    text: string
    username: string
    profileImg: string
    image?: string
}

export type CommentBody = {
    comment: string
    buzzId: string
    username: string
    
}