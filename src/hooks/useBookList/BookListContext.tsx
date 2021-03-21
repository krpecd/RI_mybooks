import React, { createContext, useState } from 'react'
import { BookListContextProps, BookListContextProviderProps, BookListContextState } from './types'

const initialState = { bookList: null, isBookListLoading: false }

const BookListContext = createContext<BookListContextProps>([ initialState, () => {} ])

const BookListContextProvider = (props: BookListContextProviderProps) => {
  const { children } = props
  const [ state, setState ] = useState<BookListContextState>(initialState)

  return (
    <BookListContext.Provider value={[ state, setState ]}>
      {children}
    </BookListContext.Provider>
  )
}

export { BookListContext, BookListContextProvider }
