import { usePosts } from '@/api/posts'
import PostCard  from './PostCard'
import { postsRoute } from '@/router/AppRouter'
import { useNavigate } from '@tanstack/react-router'
import Pagination from '@/components/Pagination/Pagination'
import { ROUTES } from '@/configs/routesConfig'

const LIMIT = 20

const PostsList: React.FC = () => {
  const navigate = useNavigate()
  const { search = '', page = 1 } = postsRoute.useSearch()
  const { data, isLoading, isError } = usePosts(page, LIMIT, search)

  function handlePageChange(newPage: number) {
    navigate({
      to: ROUTES.HOME,
      search: { search, page: newPage },
    })
  }

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
          onPageChange={handlePageChange}
        />
      </div>
    )
}

export default PostsList;
