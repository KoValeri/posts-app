import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from './consts'
import postsApi from '@/api/posts/posts.api'
import type { PostsResponse } from '@/types/posts.types'

export const usePosts = (page: number, limit = 20, search = '') => {
  const skip = (page - 1) * limit

  return useQuery({
    queryKey: QUERY_KEYS.POSTS_LIST(page, limit),
    queryFn: () => postsApi.getPosts({ limit, skip }),

    select: (data: PostsResponse) => {
      const filteredPosts = (data.posts ?? []).filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )

      return {
        posts: filteredPosts,
        total: data.total ?? 0,
        totalPages: Math.ceil((data.total ?? 0) / limit),
      }
    }
  })
}

