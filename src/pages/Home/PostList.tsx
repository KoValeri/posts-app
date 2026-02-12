import { usePosts } from '@/api/posts'
import PostCard  from './PostCard'
import { useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'

const LIMIT = 10

const PostsList: React.FC = () => {
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = usePosts(page, LIMIT)

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
      <div className="p-6 space-y-6">
        <div>
          {data?.posts.map(post => (
            <PostCard 
            key={post.id}
            {...post} />
          ))}
        </div>
        <Pagination
          currentPage={page}
          totalPages={data?.totalPages ?? 0}
          onPageChange={setPage}
        />
      </div>
    )
}

export default PostsList;
