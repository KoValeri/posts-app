import type { Post } from '@/types/posts.types'
import { Link } from '@tanstack/react-router'
import { ROUTES } from '@/configs/routesConfig'
import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineDislike } from "react-icons/ai"
import { FaRegEye } from 'react-icons/fa'

const PostCard = ({ id, title, body, tags, reactions, views }: Post) => {
  return (
    <Link className="p-5" 
      to={ROUTES.POST} 
      params={{ id }}
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
            <span className="flex items-center gap-1 text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-full">
              <AiOutlineLike /> {reactions.likes}
            </span>
            <span className="flex items-center gap-1 text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-full">
              <AiOutlineDislike /> {reactions.dislikes}
            </span>
          </div>

          <span className="flex items-center gap-1 text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-full">
            <FaRegEye /> {views}
          </span>
        </div>

      </div>
    </Link>
  )
}

export default PostCard
