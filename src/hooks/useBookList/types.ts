import { ReactNode } from "react"
import { Book } from "../../api/types"

export interface UseBookListReturn {
  loadBookList: VoidFunction
  currentlyReading?: Book[]
  wantToRead?: Book[]
  read?: Book[]
  isBookListLoading: boolean
  isBookListLoaded: boolean
}

export interface BookListContextState {
  bookList: Book[] | null
  isBookListLoading: boolean
  isBookListLoaded: boolean
}

export type BookListContextProps = [
  BookListContextState,
  React.Dispatch<React.SetStateAction<BookListContextState>>
]

export interface BookListContextProviderProps {
  children: ReactNode
}