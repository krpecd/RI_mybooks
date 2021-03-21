import React, { useEffect, useState } from 'react'
import { search } from '../../../api/Books'
import { Book } from '../../../api/types'
import SearchPage from './SearchPage'

function SearchPageContainer() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [results, setResults] = useState<Book[] | undefined | null>(null)

  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true)
      search(searchTerm)
        .then(res => {
          setResults(res)
          setIsSearching(false)
        })
        .catch(err => {
          setIsSearching(false)
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
      isSearching={isSearching}
    />
  )
}

export default SearchPageContainer
