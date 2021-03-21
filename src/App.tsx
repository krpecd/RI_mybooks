import React from 'react'
import { BookListContextProvider } from './hooks/useBookList/BookListContext'
import Router from './components/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="app">
      <BookListContextProvider>
        <Router />
      </BookListContextProvider>
      <ToastContainer position="bottom-left" />
    </div>
  )
}

export default App
