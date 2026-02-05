import { useQuery } from '@tanstack/react-query'
import { getPosts } from '@/api/posts'
import type { PostsResponse } from '@/types'

export const usePosts = () => {
  return useQuery<PostsResponse>({
    queryKey: ['posts'],
    queryFn: () => getPosts({ limit: 10 }),
  })
}
