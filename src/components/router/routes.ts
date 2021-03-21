import MainPage from "../pages/MainPage"
import SearchPage from "../pages/SearchPage"
import NotFound from "../pages/NotFound"
import { Route } from "./types"

export const mainPageRoute: Route = {
  key: 'MAIN_PAGE',
  path: '/',
  exact: true,
  Component: MainPage
}

export const searchPageRoute: Route = {
  key: 'SEARCH_PAGE',
  path: '/search',
  exact: true,
  Component: SearchPage
}

export const notFoundRoute: Route = {
  key: 'NOT_FOUND_PAGE',
  path: '/',
  exact: false,
  Component: NotFound
} 

const routes = [
  mainPageRoute,
  searchPageRoute,
  notFoundRoute
]

export default routes
