import { useCallback, useContext } from "react"
import { getAll } from "../../api/Books"
import { Book, BooksInShelfs, ShelfType } from "../../api/types"
import { BookListContext } from "./BookListContext"
import { UseBookListReturn } from "./types"
import {toast} from 'react-toastify'

const useBookList = (): UseBookListReturn => {
  const [state, setState] = useContext(BookListContext)

  const loadBookList = useCallback(() => {
    setState(state => ({...state, isBookListLoading: true}))
    getAll()
      .then(res => {
        const booksInShelfs: BooksInShelfs = {
          currentlyReading: res?.filter(book => book.shelf === 'currentlyReading').map(book => book.id) ?? [],
          wantToRead: res?.filter(book => book.shelf === 'wantToRead').map(book => book.id) ?? [],
          read: res?.filter(book => book.shelf === 'read').map(book => book.id) ?? []
        } 
        setState(state => ({
          ...state,
          isBookListLoaded: true,
          isBookListLoading: false,
          bookList: res,
          booksInShelfs: booksInShelfs
        }))
      })
      .catch(err => {
        console.error('Error loading books:', err)
        toast.error('Something went wrong')
        setState(state => ({
          ...state,
          isBookListLoading: false,
          bookList: null
        }))
      }) 
  }, [setState])

  const getBooksByShelf = (shelf: ShelfType): Book[] | undefined => {
    const shelfBookIds = state?.booksInShelfs?.[shelf]
    return state.bookList?.filter(book => shelfBookIds?.includes(book.id))
  }

  const getBookShelf = (bookId: string): ShelfType | 'none' => {
    let shelf: ShelfType | 'none' = 'none'
    if (state?.booksInShelfs) {
      Object.keys(state.booksInShelfs).forEach(key => {
        if (state?.booksInShelfs?.[key as ShelfType]?.includes(bookId)) {
          shelf = key as ShelfType
        }
      })
    }
    return shelf
  }

  const setBooksInShelfs = (booksInShelfs: BooksInShelfs): void => {
    setState(state => ({
      ...state,
      booksInShelfs: booksInShelfs
    }))
  }
  
  return {
    loadBookList,
    currentlyReading: getBooksByShelf('currentlyReading'),
    wantToRead: getBooksByShelf('wantToRead'),
    read: getBooksByShelf('read'),
    isBookListLoading: state.isBookListLoading,
    isBookListLoaded: state.isBookListLoaded,
    setBooksInShelfs,
    getBookShelf
  }
}

export default useBookList
