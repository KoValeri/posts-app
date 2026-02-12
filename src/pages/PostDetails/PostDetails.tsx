import { useParams } from '@tanstack/react-router'
import { usePost } from '@/api/hooks/usePost'
import { useComments } from '@/api/hooks/useComments'

export default function PostDetails() {
  const { id } = useParams({ strict: false })
  const postId = Number(id)

  const { data: post, isLoading: postLoading } = usePost(postId)
  const { data: comments, isLoading: commentsLoading } = useComments(postId)

  if (postLoading || commentsLoading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="text-lg font-medium text-gray-600">
          Loading...
        </span>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex justify-center mt-20 text-gray-500">
        Post not found
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">

      <div className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>

        <p className="text-gray-700 leading-relaxed">
          {post.body}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-3 border-t">

          <div className="flex gap-3">
            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
              👍 {post.reactions.likes}
            </span>
            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
              👎 {post.reactions.dislikes}
            </span>
          </div>

          <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
            👁 {post.views}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Comments ({comments?.comments.length})
        </h2>

        {comments?.comments.map(comment => (
          <div
            key={comment.id}
            className="bg-white border rounded-lg p-4 shadow-sm"
          >
            <p className="text-gray-800 mb-2">
              {comment.body}
            </p>

            <div className="text-sm text-gray-500">
              — {comment.user.fullName}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
