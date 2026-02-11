import type { PaginationItem, PaginationRangeParams } from '@/types/pagination.types'

export function getPaginationRange({
  currentPage,
  totalPages,
  siblingCount = 2,
}: PaginationRangeParams): PaginationItem[] {
  const range: PaginationItem[] = []

  if (totalPages === 0) return range

  const left = Math.max(currentPage - siblingCount, 2)
  const right = Math.min(currentPage + siblingCount, totalPages - 1)

  range.push(1)

  if (left > 2) {
    range.push('...')
  }

  for (let i = left; i <= right; i++) {
    range.push(i)
  }

  if (right < totalPages - 1) {
    range.push('...')
  }

  if (totalPages > 1) {
    range.push(totalPages)
  }

  return range
}
