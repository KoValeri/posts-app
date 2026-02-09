import { useQuery } from '@tanstack/react-query'
import { getPostById } from '@/api/posts'
import type { Post } from '@/types'

export const usePost = (id: number) => {
  return useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
  })
}
