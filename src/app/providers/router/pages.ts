import { routeName as home } from "./routes/home";
import { routeName as notFound } from './routes/not-found'
import { routeName as Redirect } from './routes/redirect'

export const pages = {
  home,
  notFound,
  Redirect,
} as const
