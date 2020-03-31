import { useState } from 'react'

interface ReturnType {
  pageSize: number
  handleShowSizeChange: (current: number, size: number) => void
}

export const usePagination = (): ReturnType => {
  const [pageSize, setPageSize] = useState(0)

  const handleShowSizeChange = (current: number, size: number): void => {
    setPageSize(size)
  }

  return { pageSize, handleShowSizeChange }
}
