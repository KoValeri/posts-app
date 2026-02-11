export interface User {
  id: number
  username: string
  fullName: string
}

export interface Comment {
  id: number
  body: string
  postID: number
  userId: number
  likes: number
  user: User
}

export interface CommentsResponse {
  comments: Comment[]
  total: number
  skip: number
  limit: number
}