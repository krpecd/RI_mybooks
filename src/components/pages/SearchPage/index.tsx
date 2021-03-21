import React, { useEffect, useState } from 'react'
import { search } from '../../../api/Books'
import { Book } from '../../../api/types'
import SearchPage from './SearchPage'
import {toast} from 'react-toastify'
import useBookList from '../../../hooks/useBookList'

function SearchPageContainer() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [results, setResults] = useState<Book[] | undefined | null>(null)
  const { loadBookList, isBookListLoaded } = useBookList()

  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true)
      setResults(null)
      search(searchTerm)
        .then(res => {
          if (Array.isArray(res)) {
            setResults(res)
          }
          setIsSearching(false)
        })
        .catch(err => {
          setIsSearching(false)
          console.error('Error in search query: ', err)
          toast.error('Something went wrong')
        })
    } else {
      setResults(null)
    }
  }, [searchTerm])

  /**
   * The search results doesn't know to which shelf they belong.
   * So we have to make sure that the bookList is Loaded.
   * In case user will access directly the /search route.
   */
  useEffect(() => {
    if (!isBookListLoaded) {
      loadBookList()
    }
  }, [loadBookList, isBookListLoaded])

  return (
    <SearchPage
      setSearchTerm={setSearchTerm}
      results={results}
      isSearching={isSearching}
    />
  )
}

export default SearchPageContainer
