import { useCallback, useContext } from "react"
import { getAll } from "../../api/Books"
import { Book, ShelfType } from "../../api/types"
import { BookListContext } from "./BookListContext"
import { UseBookListReturn } from "./types"
import {toast} from 'react-toastify'

const useBookList = (): UseBookListReturn => {
  const [state, setState] = useContext(BookListContext)

  const loadBookList = useCallback(() => {
    setState(state => ({...state, isBookListLoading: true}))
    getAll()
      .then(res => {
        setState(state => ({
          ...state,
          isBookListLoaded: true,
          isBookListLoading: false,
          bookList: res 
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
    return state.bookList?.filter(book => book.shelf === shelf)
  }

  const changeBookShelf = (book: Book, targetShelf: ShelfType): void => {
    const newBooks = state.bookList?.filter(item => item.id !== book.id) ?? []
    book.shelf = targetShelf
    newBooks.push(book)
    setState(state => ({...state, bookList: newBooks}))
  }
  
  return {
    loadBookList,
    currentlyReading: getBooksByShelf('currentlyReading'),
    wantToRead: getBooksByShelf('wantToRead'),
    read: getBooksByShelf('read'),
    isBookListLoading: state.isBookListLoading,
    isBookListLoaded: state.isBookListLoaded,
    changeBookShelf
  }
}

export default useBookList
