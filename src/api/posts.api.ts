import  api  from './api-instance'
import { API_URLS } from './configs/url.config'
import type { Post, PostsParams, PostsResponse } from '@/types/posts.types'
import type { CommentsResponse } from '@/types/comments.types'

const postsApi = {
  getPosts: async ({ limit = 10, skip = 0 }: PostsParams): Promise<PostsResponse> => {
    const response = await api.get(API_URLS.POSTS, {
      params: { limit, skip },
    })
    return response.data
  },

  getPostById: async (id: number): Promise<Post> => {
    const response = await api.get(API_URLS.POST_BY_ID(id))
    return response.data
  },

  getCommentsByPostId: async (postId: number): Promise<CommentsResponse> => {
    const response = await api.get(API_URLS.COMMENTS_BY_POST(postId))
    return response.data
  },
}

export default postsApi
