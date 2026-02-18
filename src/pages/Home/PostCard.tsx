import type { Post } from '@/types/posts.types'
import { Link } from '@tanstack/react-router'
import { ROUTES } from '@/configs/routesConfig'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai"
import { FaRegEye } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store'
import { reactionsActions } from '@/store/reactionsSlice'

const PostCard = ({ id, title, body, tags, reactions, views }: Post) => {
  const dispatch = useDispatch()
  const postReactions = useSelector((state: RootState) => state.reactions[id])

  const likesCount = postReactions?.likes ?? reactions.likes
  const dislikesCount = postReactions?.dislikes ?? reactions.dislikes
  const isLiked = postReactions?.isLiked ?? false
  const isDisliked = postReactions?.isDisliked ?? false
  const postViews = postReactions?.views ?? views

  return (
    <Link className="p-5" 
      to={ROUTES.POST} 
      params={{ id }}
      onClick={() => dispatch(reactionsActions.toggleViews({ postId: id, likes: reactions.likes, dislikes: reactions.dislikes, views }))}
      >
      
      <div className="p-5 border rounded-lg shadow-sm bg-white space-y-3 hover:bg-gray-50 transition-colors cursor-pointer">
        
        <h2 className="text-lg md:text-xl lg:text-xl font-bold">{title}</h2>
        <p className="text-sm md:text-base lg:text-base text-gray-700 truncate">{body}</p>


        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-xs md:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-2">

          <div className="flex gap-2">
            <button
              className="flex items-center gap-1 text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-full cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                dispatch(reactionsActions.toggleLikes({ postId: id, likes: reactions.likes, dislikes: reactions.dislikes, views }))
              }}
            >
              {isLiked ? <AiFillLike /> : <AiOutlineLike />} {likesCount}
            </button>

            <button
              onClick={(e) => {
                e.preventDefault()
                dispatch(reactionsActions.toggleDislikes({ postId: id, likes: reactions.likes, dislikes: reactions.dislikes, views }))
              }}
              className="flex items-center gap-1 text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-full cursor-pointer"
            >
              {isDisliked ? <AiFillDislike /> : <AiOutlineDislike />} {dislikesCount}
            </button>
          </div>

          <span className="flex items-center gap-1 text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-full">
            <FaRegEye /> {postViews}
          </span>
        </div>

      </div>
    </Link>
  )
}

export default PostCard
