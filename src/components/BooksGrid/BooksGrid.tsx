import React from 'react'
import Book from '../Book'
import { BooksGridProps } from './types'
import './BooksGrid.css'

function BooksGrid(props: BooksGridProps) {
  const {bookList} = props
  
  return (
    <ol className="books-grid">
      {bookList.map(book => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ol>
  )
}

export default BooksGrid
