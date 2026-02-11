import { usePosts } from '@/hooks/usePosts'
import PostCard  from './PostCard'
import { useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'

const LIMIT = 10

const PostsList: React.FC = () => {
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = usePosts(page, LIMIT)

  const totalPages = Math.ceil((data?.total ?? 0) / LIMIT)

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
      <div className="p-5">
        <div>
          {data?.posts.map(post => (
            <PostCard 
            key={post.id}
            {...post} />
          ))}
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    )
}

export default PostsList;
