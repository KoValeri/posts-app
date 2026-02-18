import PostCard  from './PostCard'
import Pagination from '@/components/Pagination/Pagination'
import type { Post } from '@/types/posts.types'

type PostsListProps = {
  posts: Post[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const PostsList = ({ posts, currentPage, totalPages, onPageChange }: PostsListProps) => {
  return (
    <div className="space-y-6 w-full">
      <div className="mt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <PostCard 
            key={post.id}
            {...post} 
          />
        ))}
      </div>

      <div className={`${posts.length > 4 ? 'flex' : 'hidden'} mb-10 justify-center`}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default PostsList;
