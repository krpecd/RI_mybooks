import React from 'react'
import { BookProps } from './types'
import './Book.css'

function Book(props: BookProps) {
  const {book} = props

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage:`url("${book.imageLinks.smallThumbnail}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select value={book.shelf ?? "move"}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading" disabled={book.shelf === 'currentlyReading'}>
              Currently Reading
            </option>
            <option value="wantToRead" disabled={book.shelf === 'wantToRead'}>
              Want to Read
            </option>
            <option value="read" disabled={book.shelf === 'read'}>
              Read
            </option>
            {book?.shelf && <option value="none">None</option>}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {!!book.authors?.length &&
        <div className="book-authors">{book.authors.join(', ')}</div>
      }
    </div>
  )
}

export default Book
