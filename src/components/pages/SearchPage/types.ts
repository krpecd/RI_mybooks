import { Book } from "../../../api/types";

export interface SearchPageProps {
  setSearchTerm: (searchTerm: string) => void
  results?: Book[] | null
  isSearching: boolean
}
