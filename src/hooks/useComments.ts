import { useQuery } from '@tanstack/react-query'
import { getCommentsByPostId } from '@/api/posts'
import type { CommentsResponse } from '@/types/comments.types'

export const useComments = (postID: number) => {
  return useQuery<CommentsResponse>({
    queryKey: ['comments', postID],
    queryFn: () => getCommentsByPostId(postID),
  })
}
