import { routeName as home } from "./routes/home";
import { routeName as notFound } from './routes/not-found'
import { routeName as Redirect } from './routes/redirect'
import { routeName as catalog } from "./routes/shop/index"
import { routeName as product } from "./routes/shop/product"
import { routeName as blog } from "./routes/blog/index"
import { routeName as article } from "./routes/blog/article"
import { routeName as ourStory } from "./routes/our-story"
import { routeName as auth } from "./routes/auth"
import { routeName as signIn } from "./routes/auth/signIn"
import { routeName as signUp } from "./routes/auth/signUp"
import { routeName as contactUs } from "./routes/contact-us"
import { routeName as forgotPassword } from "./routes/forgotPassword"
import { routeName as privacyPolicy } from "./routes/privacy-policy"
import { routeName as account } from "./routes/account"
import { routeName as dashboard } from "./routes/account/dashboard"
import { routeName as details } from "./routes/account/details"
import { routeName as addresses } from "./routes/account/addresses"
import { routeName as downloads } from "./routes/account/downloads"
import { routeName as orders } from "./routes/account/orders"

export const pages = {
  home,
  notFound,
  Redirect,
  catalog,
  product,
  blog,
  article,
  ourStory,
  auth,
  signIn,
  signUp,
  contactUs,
  forgotPassword,
  privacyPolicy,
  account,
  dashboard,
  details,
  addresses,
  downloads,
  orders,
} as const
