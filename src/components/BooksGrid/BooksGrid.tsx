import React from 'react'
import Book from '../Book'
import { BooksGridProps } from './types'
import './BooksGrid.css'
import BookLoader from '../Book/BookLoader'

function BooksGrid(props: BooksGridProps) {
  const {bookList, loading} = props
  
  return (
    <ol className="books-grid">
      {loading && 
        <>
          <li><BookLoader /></li>
          <li><BookLoader /></li>
          <li><BookLoader /></li>
          <li><BookLoader /></li>
        </>
      }
      {bookList?.map(book => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ol>
  )
}

export default BooksGrid
