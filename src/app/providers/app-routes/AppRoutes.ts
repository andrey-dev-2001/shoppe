import { AppPages } from '../router'

interface IRoute<T extends object = {}> {
  name: string
  params: T
}

export class AppRoutes {
  private constructor() {}

  static getHome() {
    return getRoute(AppPages.home, {})
  }

  static getMain() {
    return getRoute(AppPages.notFound, {})
  }

  static getStatistics() {
    return getRoute(AppPages.Redirect, {})
  }
}

function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
  return {
    name,
    params,
  }
}
