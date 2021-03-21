import React from 'react'
import { BookListContextProvider } from './components/hooks/useBookList/BookListContext'
import Router from './components/router'

function App() {
  return (
    <div className="app">
      <BookListContextProvider>
        <Router />
      </BookListContextProvider>
    </div>
  )
}

export default App
