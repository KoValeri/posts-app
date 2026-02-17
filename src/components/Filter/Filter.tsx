import { FaFilter } from "react-icons/fa"
import { useNavigate } from '@tanstack/react-router'
import { postsRoute } from '@/router/AppRouter'
import { ROUTES } from '@/configs/routesConfig'

export interface FilterProps {
  tags: string[]
}

const Filter = ({ tags }: FilterProps) => {
  const navigate = useNavigate()
  const { search = '', page = 1, tag = '' } = postsRoute.useSearch()

  function handleChange(selectedTag: string) {
    navigate({
      to: ROUTES.HOME,
      search: { search, page, tag: selectedTag },
    })
  }

  return (
    <form className="flex justify-end items-center mt-6 mr-6 gap-2 text-base md:text-lg lg:text-lg">
      <div className="relative">
        <select
          name="tags"
          id="tags-select"
          value={tag}
          onChange={(e) => handleChange(e.target.value)}
          className="
            appearance-none
            border
            border-gray-300
            rounded-lg
            px-4
            py-2
            pr-10
            text-gray-700
            hover:border-red-800
            focus:outline-none
            focus:ring-2
            focus:ring-red-800
            focus:border-red-800
            transition
            cursor-pointer
          "
        >
          <option value="">All Tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <FaFilter className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
    </form>
  )
}

export default Filter
