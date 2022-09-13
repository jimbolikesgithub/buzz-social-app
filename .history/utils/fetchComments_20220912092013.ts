export const fetchComments = async (buzzId: string) => {
    // Make call to backend to handle
    const res = await fetch(`/api/getComments?buzzId=${buzzId}`)

    const comments: Comment[] = await res.json()

    return comments
}