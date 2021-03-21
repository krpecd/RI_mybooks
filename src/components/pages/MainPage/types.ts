import { Book } from "../../../api/types";

export interface MainPageProps {
  loading: boolean
  currentlyReading?: Book[]
  wantToRead?: Book[]
  read?: Book[]
}
