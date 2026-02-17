import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { ROUTES } from '@/configs/routesConfig'

interface SearchParams {
  search?: string
  page?: number
  tag?: string
}

const Header = () => {
  const navigate = useNavigate()
  const search = useRouterState({select: (state) => state.location.search as SearchParams})

  const value = search?.search ?? ''

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value

    navigate({
      to: ROUTES.HOME,
      search: (prev: SearchParams) => ({
        ...prev,
        search: val,
        page: 1,
      }),
      replace: true,
    })
  }

  return (
    <header className="bg-red-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">

        <Link
          to={ROUTES.HOME}
          className="text-2xl font-bold hover:text-red-200 transition-colors cursor-pointer"
        >
          PostsApp
        </Link>

        <input
          name="search"
          type="text"
          placeholder="Search posts..."
          value={value}
          onChange={handleSearch}
          className="
            w-70
            cursor-pointer
            px-3
            py-2
            rounded-md
            bg-white
            text-black
            focus:outline-none
          "
        />

      </div>
    </header>
  )
}

export default Header
