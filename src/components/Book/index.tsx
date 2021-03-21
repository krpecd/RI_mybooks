import React, { useState } from 'react'
import { update } from '../../api/Books'
import { ShelfType } from '../../api/types'
import useBookList from '../../hooks/useBookList'
import Book from './Book'
import {BookContainerProps} from './types'
import {toast} from 'react-toastify'

function BookContainer(props: BookContainerProps) {
  const {book} = props
  const {setBooksInShelfs} = useBookList()
  const [isChangingShelf, setIsChangingShelf] = useState<boolean>(false)

  const changeBookShelf = (shelf: ShelfType | 'none') => {
    setIsChangingShelf(true)
    update(book, shelf)
      .then((res) => {
        setIsChangingShelf(false)
        if (shelf === 'none') {
          toast.success(`${book.title} was succesfully removed from ${book.shelf} shelf`)
        } else {
          toast.success(`${book.title} was successfully added to ${shelf} shelf`)
        }
        setBooksInShelfs(res)
      })
      .catch(err => {
        toast.error('Something went wrong.')
        console.error('Error changing book shelf: '+ err)
        setIsChangingShelf(false)
      })
  }

  return (
    <Book 
      book={book}
      changeBookShelf={changeBookShelf}
      isChangingShelf={isChangingShelf}
    />
  )
}

export default BookContainer
