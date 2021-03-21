import React from 'react'
import BookShelf from '../../BookShelf'
import { MainPageProps } from './types'
import './MainPage.css'

function MainPage(props: MainPageProps) {
  const {loading, currentlyReading, wantToRead, read} = props

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {!!(loading || currentlyReading?.length) &&
            <BookShelf 
              title="Currently Reading"
              loading={loading}
              bookList={currentlyReading}
            />
          }
          {!!(loading || wantToRead?.length) &&
            <BookShelf 
              title="Want to Read"
              loading={loading}
              bookList={wantToRead}
            />
          }
          {!!(loading || read?.length) &&
            <BookShelf 
              title="Read"
              loading={loading}
              bookList={read}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default MainPage
