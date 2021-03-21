import React, { useEffect } from 'react'
import useBookList from '../../../hooks/useBookList'
import MainPage from './MainPage'

function MainPageContainer() {
  const {loadBookList} = useBookList()

  useEffect(() => {
    loadBookList()
  }, [loadBookList])

  return (<MainPage />)
}

export default MainPageContainer
