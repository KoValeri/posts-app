import { useParams } from '@tanstack/react-router'
import { usePost } from '@/api/posts'
import { useComments } from '@/api/posts'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai"
import { FaRegEye } from 'react-icons/fa'
import { IoArrowBack } from "react-icons/io5"
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store'
import { reactionsActions } from '@/store/reactionsSlice'

const PostDetails = () => {
  const { id } = useParams({ strict: false })
  const postId = Number(id)

  const dispatch = useDispatch()

  const { data: post, isLoading: postLoading } = usePost(postId)
  const { data: comments, isLoading: commentsLoading } = useComments(postId)


  const postReactions = useSelector((state: RootState) => state.reactions[postId])

  const likesCount = postReactions?.likes ?? post?.reactions.likes ?? 0
  const dislikesCount = postReactions?.dislikes ?? post?.reactions.dislikes ?? 0
  const isLiked = postReactions?.isLiked ?? false
  const isDisliked = postReactions?.isDisliked ?? false
  const postViews = postReactions?.views ?? post?.views ?? 0

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

  function handleBack() {
    window.history.back()
  }

  return (
    <div className="p-6 space-y-6">

      <button className="flex items-center justify-between w-16 text-xl cursor-pointer" onClick={handleBack}>
        <IoArrowBack /> Back
      </button>

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
            <button
              className="flex items-center gap-1 text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-full cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                dispatch(reactionsActions.toggleLikes({ postId: id, likes: post.reactions.likes, dislikes: post.reactions.dislikes, views: post.views }))
              }}
            >
              {isLiked ? <AiFillLike /> : <AiOutlineLike />} {likesCount}
            </button>

            <button
              onClick={(e) => {
                e.preventDefault()
                dispatch(reactionsActions.toggleDislikes({ postId: id, likes: post.reactions.likes, dislikes: post.reactions.dislikes, views: post.views }))
              }}
              className="flex items-center gap-1 text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-full cursor-pointer"
            >
              {isDisliked ? <AiFillDislike /> : <AiOutlineDislike />} {dislikesCount}
            </button>
          </div>

          <span className="flex items-center gap-1 text-sm bg-gray-200 px-3 py-1 rounded-full">
            <FaRegEye /> {postViews}
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

export default PostDetails
