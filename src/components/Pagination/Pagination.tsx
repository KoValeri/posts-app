import { getPaginationRange } from '@/components/Pagination/getPaginationRange'
import type { PaginationProps } from '@/types/pagination.types'

const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps) => {
    const pages = getPaginationRange({ currentPage, totalPages,})

    return (
        <div className="flex justify-center items-center gap-2">

        <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 cursor-pointer"
        >
            ←
        </button>

        {pages.map((item, index) =>
            item === '...' ? (
            <span key={`dots-${index}`} className="px-2 text-gray-500">
                ...
            </span>
            ) : (
            <button
                key={`page-${item}`}
                onClick={() => onPageChange(item)}
                className={`px-3 py-1 rounded cursor-pointer ${
                item === currentPage
                    ? 'bg-red-800 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
            >
                {item}
            </button>
            )
        )}

        <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 cursor-pointer"
        >
            →
        </button>
        </div>
    )
}

export default Pagination
