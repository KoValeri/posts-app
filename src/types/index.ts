export interface Reactions {
  likes: number
  dislikes: number
}

export interface Post {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: Reactions
  views: number
}

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

export interface PostsParams {
  limit?: number
  skip?: number
}

export interface PostsResponse {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export interface CommentsResponse {
  comments: Comment[]
  total: number
  skip: number
  limit: number
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export type PaginationItem = number | '...'

export interface PaginationRangeParams {
  currentPage: number
  totalPages: number
  siblingCount?: number
}