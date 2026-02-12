import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from './consts'
import postsApi from '@/api/posts/posts.api'
import type { PostsResponse } from '@/types/posts.types'

export const usePosts = (page: number, limit = 10) => {
  const skip = (page - 1) * limit

  return useQuery({
    queryKey: QUERY_KEYS.POSTS_LIST(page, limit),
    queryFn: () => postsApi.getPosts({ limit, skip }),

    select: (data: PostsResponse) => ({
      posts: data.posts ?? [],
      total: data.total ?? 0,
      totalPages: Math.ceil((data.total ?? 0) / limit),
    }),
  })
}

