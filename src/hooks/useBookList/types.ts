import { ReactNode } from "react"
import { Book } from "../../api/types"

export interface UseBookListReturn {
  loadBookList: VoidFunction
  isBookListLoading: boolean
}

export interface BookListContextState {
  bookList: Book[] | null
  isBookListLoading: boolean
}

export type BookListContextProps = [
  BookListContextState,
  React.Dispatch<React.SetStateAction<BookListContextState>>
]

export interface BookListContextProviderProps {
  children: ReactNode
}