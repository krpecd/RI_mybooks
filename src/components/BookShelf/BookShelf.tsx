import React from 'react'
import Book from '../Book'
import { BookShelfProps } from './types'

function BookShelf(props: BookShelfProps) {
  const {loading, title, bookList} = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList?.map(book => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
