import { useCallback, useContext } from "react"
import { getAll } from "../../api/Books"
import { Book, ShelfType } from "../../api/types"
import { BookListContext } from "./BookListContext"
import { UseBookListReturn } from "./types"

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
        // TODO: notify error
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
  
  return {
    loadBookList,
    currentlyReading: getBooksByShelf('currentlyReading'),
    wantToRead: getBooksByShelf('wantToRead'),
    read: getBooksByShelf('read'),
    isBookListLoading: state.isBookListLoading,
    isBookListLoaded: state.isBookListLoaded
  }
}

export default useBookList
