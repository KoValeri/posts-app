import { RouterProvider } from '@tanstack/react-router'
import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import { ROUTES } from '@/configs/routesConfig'
import App from '@/App'
import HomePage from '@/pages/Home/HomePage'
import PostDetailsPage from '@/pages/PostDetails/PostDetailsPage'

const rootRoute = createRootRoute({
  component: App,
})

export const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME,
  component: HomePage,

  validateSearch: (search: Record<string, unknown>) => {
    return {
      search: typeof search.search === 'string' ? search.search : '',
      page: Number(search.page) > 0 ? Number(search.page) : 1,
      tag: typeof search.tag === 'string' ? search.tag : '',
    }
  },
})

const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.POST,
  component: PostDetailsPage,
})

const routeTree = rootRoute.addChildren([
  postsRoute,
  postRoute
])

export const router = createRouter({
  routeTree,
})


export default function AppRouter(){
    return <RouterProvider router={router} />
}