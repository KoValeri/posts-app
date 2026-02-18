import { useNavigate } from '@tanstack/react-router'
import { postsRoute } from '@/router/AppRouter'
import { ROUTES } from '@/configs/routesConfig'
import { GoTrash } from "react-icons/go"

export interface FilterProps {
  filterTags: string[]
}

const Filter = ({ filterTags }: FilterProps) => {
  const navigate = useNavigate()
  const { search = '', page = 1, tags = [] } = postsRoute.useSearch() as { search: string, page: number, tags: string[] }

  let newTags: string[]

  function handleChange(selectedTag: string, checked: boolean) {
      if (checked) {
        newTags = [...tags, selectedTag]
      } else {
        newTags = tags.filter(tag => tag !== selectedTag)
      }

      navigate({
        to: ROUTES.HOME,
        search: { search, page, tags: newTags },
      })
  }

  function handleReset() {
      navigate({
        to: ROUTES.HOME,
        search: { search, page, tags: [] },
      })
  }

  return (
    <form className="p-5">
      <div className="mb-2 text-lg font-semibold text-gray-700 flex items-center justify-between">
        <span>Tags</span>
        <div onClick={handleReset} className={`${tags.length > 0 ? 'flex' : 'hidden'} cursor-pointer text-gray-500 hover:text-red-500`}><GoTrash /></div>
      </div>
      <div className="flex flex-col gap-2 max-h-64 overflow-auto">
        {filterTags?.map((tag) => (
          <label
            key={tag}
            htmlFor={tag}
            className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800"
          >
            <input
              type="checkbox"
              id={tag}
              value={tag}
              checked={tags.includes(tag)}
              onChange={(e) => handleChange(tag, e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
            />
            <span>{tag}</span>
          </label>
        ))}
      </div>
    </form>
  )
}

export default Filter
