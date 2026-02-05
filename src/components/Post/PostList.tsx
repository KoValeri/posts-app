import { usePosts } from '@/hooks/usePosts'
import PostCard  from './PostCard'

const PostsList: React.FC = () => {
  const { data, isLoading, isError } = usePosts()

 if (isLoading)
  return (
    <div className="flex justify-center mt-20">
      <span className="text-lg font-medium text-gray-600">
        Loading...
      </span>
    </div>
  )

  if (isError)
  return (
    <div className="flex justify-center mt-20">
      <span className="text-lg font-medium text-red-600">
        Error...
      </span>
    </div>
  )

  return (
  <div className='space-y-4 p-4'>
    {data?.posts.map(post => (
      <PostCard 
      key={post.id}
      {...post} />
    ))}
  </div>
  )
}

export default PostsList;
