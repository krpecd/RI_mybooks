import { Book } from "../../api/types"

export interface BooksGridProps {
  bookList?: Book[] | null
  loading: boolean
}
