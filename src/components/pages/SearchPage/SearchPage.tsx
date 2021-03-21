import React from 'react'
import {useHistory} from 'react-router-dom'
import {mainPageRoute} from '../../router/routes'
import './SearchPage.css'

function SearchPage() {
  const history = useHistory()

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => history.push(mainPageRoute.path)}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms in SEARCH_TERMS.MD

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid" />
      </div>
    </div>
  )
}

export default SearchPage
