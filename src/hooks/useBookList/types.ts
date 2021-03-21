import { ReactNode } from "react"
import { Book, ShelfType } from "../../api/types"

export interface UseBookListReturn {
  loadBookList: VoidFunction
  currentlyReading?: Book[]
  wantToRead?: Book[]
  read?: Book[]
  isBookListLoading: boolean
  isBookListLoaded: boolean
  changeBookShelf: (book: Book, targetShelf: ShelfType) => void
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