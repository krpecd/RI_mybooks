import { Book, ShelfType } from "../../api/types";

export interface BookContainerProps {
  book: Book
}
export interface BookProps extends BookContainerProps {
  changeBookShelf: (shelf: ShelfType) => void
  isChangingShelf: boolean
}
