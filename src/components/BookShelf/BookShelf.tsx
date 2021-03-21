import React from 'react'
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
              <>{book.title}</>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
