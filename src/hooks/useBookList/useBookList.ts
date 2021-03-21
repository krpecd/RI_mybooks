import { useCallback, useContext } from "react"
import { getAll } from "../../BooksAPI"
import { BookListContext } from "./BookListContext"
import { UseBookListReturn } from "./types"

const useBookList = (): UseBookListReturn => {
  const [state, setState] = useContext(BookListContext)

  const loadBookList = useCallback(() => {
    setState(state => ({...state, isBookListLoading: true}))
    getAll()
      .then(res => {
        console.log(res)
        setState(state => ({
          ...state,
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
  
  return {
    loadBookList,
    isBookListLoading: state.isBookListLoading
  }
}

export default useBookList
