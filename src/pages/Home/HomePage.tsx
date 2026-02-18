import PostsList from '@/pages/Home/PostsList';
import Filter from '@/components/Filter/Filter';
import { usePosts } from '@/api/posts'
import { postsRoute } from '@/router/AppRouter'
import { useNavigate } from '@tanstack/react-router'
import { ROUTES } from '@/configs/routesConfig'


const LIMIT = 20

export default function HomePage() {
    const navigate = useNavigate()
    const { search = '', page = 1, tags = [] } = postsRoute.useSearch()
    const { data, isLoading, isError } = usePosts(page, LIMIT, search, tags)

    const filterTags = data?.posts ? Array.from(new Set (data.posts.flatMap(post => post.tags))) : []

    function handlePageChange(newPage: number) {
      navigate({
        to: ROUTES.HOME,
        search: { search, page: newPage, tags },
      })

      window.scrollTo({ top: 0 });
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
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
      <aside className="px-4 mt-24">
        <div className="sticky top-20">
          <Filter filterTags={filterTags} />
        </div>
      </aside>

      <main className="w-full">
        <PostsList
          posts={data?.posts ?? []}
          currentPage={page}
          totalPages={data?.totalPages ?? 0}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}
