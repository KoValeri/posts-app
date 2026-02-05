import type { Post } from '@/types'

const PostCard: React.FC<Post> = ({ title, body, tags, reactions, views }) => {
  return (
    <div className="p-5">
      <div className="p-5 border rounded-lg shadow-sm bg-white space-y-3 hover:bg-gray-50 transition-colors cursor-pointer">
        
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-700 truncate">{body}</p>


        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-2">

          <div className="flex gap-2">
            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
              👍 {reactions.likes}
            </span>
            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
              👎 {reactions.dislikes}
            </span>
          </div>

          <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
            👁 {views}
          </span>
        </div>

      </div>
    </div>
  )
}

export default PostCard
