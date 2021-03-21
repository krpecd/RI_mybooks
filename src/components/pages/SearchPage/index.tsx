import React, { useEffect, useState } from 'react'
import { search } from '../../../api/Books'
import { Book } from '../../../api/types'
import SearchPage from './SearchPage'

function SearchPageContainer() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [results, setResults] = useState<Book[] | undefined | null>(null)

  useEffect(() => {
    if (searchTerm) {
      search(searchTerm)
        .then(res => setResults(res))
        .catch(err => {
          console.error('Error in search query: ', err)
          // TODO: notify error
        })
    } else {
      setResults(null)
    }
  }, [searchTerm])

  return (
    <SearchPage
      setSearchTerm={setSearchTerm}
      results={results}
    />
  )
}

export default SearchPageContainer
