import React from 'react'
import {useHistory} from 'react-router-dom'
import {mainPageRoute} from '../../router/routes'
import './SearchPage.css'
import { SearchPageProps } from './types'
import debounce from 'lodash/debounce'
import BooksGrid from '../../BooksGrid'

function SearchPage(props: SearchPageProps) {
  const {setSearchTerm, results} = props
  const history = useHistory()

  const handleInputChange = debounce(searchTerm => {
    setSearchTerm(searchTerm)
  }, 300)

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
          <input 
            type="text" 
            placeholder="Search by title or author"
            onChange={e => handleInputChange(e.target.value)} 
          />
        </div>
      </div>
      {!!results?.length &&
        <div className="search-books-results">
          <BooksGrid bookList={results} />
        </div>
      }
    </div>
  )
}

export default SearchPage
