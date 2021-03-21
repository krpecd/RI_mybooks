import { ReactNode } from "react"
import { Book, BooksInShelfs, ShelfType } from "../../api/types"

export interface UseBookListReturn {
  loadBookList: VoidFunction
  currentlyReading?: Book[]
  wantToRead?: Book[]
  read?: Book[]
  isBookListLoading: boolean
  isBookListLoaded: boolean
  setBooksInShelfs: (booksInShelfs: BooksInShelfs) => void
  getBookShelf: (bookId: string) => ShelfType | 'none'
  addBookToBookList: (book: Book) => void
}

export interface BookListContextState {
  bookList: Book[] | null,
  booksInShelfs: BooksInShelfs | null 
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