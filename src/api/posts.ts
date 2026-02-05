import axios from 'axios'
import type { Post, PostsParams, PostsResponse } from '@/types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
})

export const getPosts = async ({ limit = 10, skip = 0 }: PostsParams): Promise<PostsResponse> => {
  const response = await api.get<PostsResponse>('/posts', { params: { limit, skip }, })
  return response.data
}

export const getPostById = async (id: number): Promise<Post> => {
  const response = await api.get<Post>(`/posts/${id}`)
  return response.data
}