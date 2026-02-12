import { QUERY_KEYS } from '@/api/configs/queryKey.config'
import { useQuery } from '@tanstack/react-query'
import postsApi from '@/api/posts.api'
import type { CommentsResponse } from '@/types/comments.types'

export const useComments = (postID: number) => {
  return useQuery<CommentsResponse>({
    queryKey: QUERY_KEYS.COMMENTS(postID),
    queryFn: () => postsApi.getCommentsByPostId(postID),
  })
}
