export const QUERY_KEYS = {
  POSTS: ['posts'] as const,

  POSTS_LIST: (page: number, limit: number) =>
    [...QUERY_KEYS.POSTS, page, limit] as const,

  POST: (id: number) =>
    ['post', id] as const,

  COMMENTS: (postId: number) =>
    ['comments', postId] as const,
}
