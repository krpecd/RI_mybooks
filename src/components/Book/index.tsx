import React, { useState } from 'react'
import { update } from '../../api/Books'
import { ShelfType } from '../../api/types'
import Book from './Book'
import {BookContainerProps} from './types'

function BookContainer(props: BookContainerProps) {
  const {book} = props
  const [isChangingShelf, setIsChangingShelf] = useState<boolean>(false)

  const changeBookShelf = (shelf: ShelfType) => {
    setIsChangingShelf(true)
    update(book, shelf)
      .then(res => {
        console.log(res)
        setIsChangingShelf(false)
        // TODO: notify success
      })
      .catch(err => {
        // TODO: notify error
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
