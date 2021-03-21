import { ReactNode } from "react"

export interface UseBookListReturn {
  loadBookList: VoidFunction
  isBookListLoading: boolean
}

export interface BookListContextState {
  bookList: any[] | null
  isBookListLoading: boolean
}

export type BookListContextProps = [
  BookListContextState,
  React.Dispatch<React.SetStateAction<BookListContextState>>
]

export interface BookListContextProviderProps {
  children: ReactNode
}