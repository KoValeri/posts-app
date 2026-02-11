import { useQuery } from '@tanstack/react-query'
import { getPosts } from '@/api/posts'
import type { PostsResponse } from '@/types/posts.types'

export const usePosts = ( page: number, limit = 10 ) => {
  const skip = (page - 1) * limit

  return useQuery<PostsResponse>({
    queryKey: ['posts', page, limit],
    queryFn: () => getPosts({ limit, skip }),
  })
}
