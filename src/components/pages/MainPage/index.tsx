import React, { useEffect } from 'react'
import useBookList from '../../../hooks/useBookList'
import MainPage from './MainPage'

function MainPageContainer() {
  const {
    loadBookList, 
    isBookListLoading,
    currentlyReading,
    wantToRead,
    read,
    isBookListLoaded
  } = useBookList()

  useEffect(() => {
    if (!isBookListLoaded) {
      loadBookList()
    }
  }, [loadBookList, isBookListLoaded])

  return (
    <MainPage 
      loading={isBookListLoading}
      currentlyReading={currentlyReading}
      wantToRead={wantToRead}
      read={read}
    />
  )
}

export default MainPageContainer
