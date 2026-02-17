import { Link, useNavigate, useRouter } from '@tanstack/react-router'
import { ROUTES } from '@/configs/routesConfig'
import { useState, useEffect } from 'react'

const Header = () => {
  const navigate = useNavigate()
  const router = useRouter()

  const searchParam = router.state.location.search?.search as string | undefined
  const [value, setValue] = useState(searchParam || '')

  useEffect(() => {
    setValue(searchParam || '')
  }, [searchParam])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setValue(val)

    navigate({
      to: ROUTES.HOME,
      search: { search: val || '', page: 1 },
      replace: true,
    })
  }

  function handleGoHome() {
    setValue('')
  }

  return (
    <header className="bg-red-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">

        <Link
          to={ROUTES.HOME}
          className="text-2xl font-bold hover:text-red-200 transition-colors cursor-pointer"
          onClick={handleGoHome}
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
            w-80
            cursor-pointer
            px-3
            py-2
            rounded-md
            text-white
            focus:outline-none
          "
        />

      </div>
    </header>
  )
}

export default Header
