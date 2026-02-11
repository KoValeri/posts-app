import { RouterProvider } from '@tanstack/react-router'
import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import { ROUTES } from '@/configs/routesConfig'
import App from '@/App'
import HomePage from '@/pages/Home/HomePage'
import PostDetailsPage from '@/pages/PostDetails/PostDetailsPage'

const rootRoute = createRootRoute({
  component: App,
})

const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME,
  component: HomePage,
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

const router = createRouter({
  routeTree,
})


export default function AppRouter(){
    return <RouterProvider router={router} />
}