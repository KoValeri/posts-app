export const QUERY_KEYS = {
  POSTS: ['posts'] as const,

  POSTS_LIST: (page: number, limit: number, search: string, tags: string[] ) =>
  [...QUERY_KEYS.POSTS, page, limit, search, tags] as const,

  POST: (id: number) =>
    ['post', id] as const,

  COMMENTS: (postId: number) =>
    ['comments', postId] as const,
}

export const API_URLS = {
  POSTS: '/posts',
  POST_BY_ID: (id: number) => `/posts/${id}`,
  COMMENTS_BY_POST: (postId: number) => `/comments/post/${postId}`,
}
