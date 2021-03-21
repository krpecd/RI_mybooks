import { FunctionComponent } from "react";

export interface Route {
  key: string,
  path: string
  exact: boolean
  Component: FunctionComponent 
}
