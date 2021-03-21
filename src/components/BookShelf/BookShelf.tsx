import React from 'react'
import { BookShelfProps } from './types'
import './BookShelf.css'
import BooksGrid from '../BooksGrid'

function BookShelf(props: BookShelfProps) {
  const {loading, title, bookList} = props
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      {(loading || bookList?.length) &&
        <div className="bookshelf-books">
          <BooksGrid bookList={bookList} loading={loading} />
        </div>
      }
    </div>
  )
}

export default BookShelf
