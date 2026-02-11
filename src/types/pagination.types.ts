export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export type PaginationItem = number | '...'

export interface PaginationRangeParams {
  currentPage: number
  totalPages: number
  siblingCount?: number
}