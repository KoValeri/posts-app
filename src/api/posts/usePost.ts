import { QUERY_KEYS } from './consts'
import { useQuery } from '@tanstack/react-query'
import postsApi from '@/api/posts/posts.api'
import type { Post } from '@/types/posts.types'

export const usePost = (id: number) => {
  return useQuery<Post>({
    queryKey: QUERY_KEYS.POST(id),
    queryFn: () => postsApi.getPostById(id),
    enabled: !!id,
  })
}
