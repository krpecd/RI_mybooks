import { Book } from "../../api/types";

export interface BookShelfProps {
  title: string
  loading: boolean
  bookList?: Book[]
}
