import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/api/configs/queryKey.config'
import postsApi from '@/api/posts.api'
import type { PostsResponse } from '@/types/posts.types'

export const usePosts = ( page: number, limit = 10 ) => {
  const skip = (page - 1) * limit

  return useQuery<PostsResponse>({
    queryKey: QUERY_KEYS.POSTS_LIST(page, limit),
    queryFn: () => postsApi.getPosts({ limit, skip }),
  })
}
