import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from './consts'
import postsApi from '@/api/posts/posts.api'
import type { PostsResponse } from '@/types/posts.types'

export const usePosts = (page: number, limit = 20, search = '', tag: string) => {
  const skip = (page - 1) * limit

  return useQuery({
    queryKey: QUERY_KEYS.POSTS_LIST(page, limit),
    queryFn: () => postsApi.getPosts({ limit, skip }),

    select: (data: PostsResponse) => {
      let posts = data.posts ?? []

      if(search) {
        posts = posts.filter(post =>
          post.title.toLowerCase().includes(search.toLowerCase())
        )
      }

      if(tag) {
        posts = posts.filter(post =>
          post.tags.includes(tag)
        )
      }

      return {
        posts,
        total: data.total ?? 0,
        totalPages: Math.ceil((data.total ?? 0) / limit),
      }
    }
  })
}

