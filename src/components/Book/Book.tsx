import React from 'react'
import { BookProps } from './types'
import './Book.css'
import { ShelfType } from '../../api/types'
import useBookList from '../../hooks/useBookList'

function Book(props: BookProps) {
  const {book, changeBookShelf, isChangingShelf} = props

  /**
   * We need to determine to which shelf the book contains.
   * Because the search results doesn't know to which shelf the book belongs
   * */
  const {getBookShelf} = useBookList()
  const shelf = getBookShelf(book.id)
  
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: book?.imageLinks?.smallThumbnail ? `url("${book.imageLinks.smallThumbnail}")` : 'none',
          }}
        />
        <div className={`book-shelf-changer ${isChangingShelf ? 'book-shelf-changer--spinning' : ''}`}>
          <select
            onChange={e => changeBookShelf(e.target.value as ShelfType)} 
            value={shelf}
            disabled={isChangingShelf}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">
              Want to Read
            </option>
            <option value="read">
              Read
            </option>
            <option value="none">None</option>
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
