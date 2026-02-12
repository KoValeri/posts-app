export const API_URLS = {
  POSTS: '/posts',
  POST_BY_ID: (id: number) => `/posts/${id}`,
  COMMENTS_BY_POST: (postId: number) => `/comments/post/${postId}`,
}
