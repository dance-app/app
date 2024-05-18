import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

type RouterContext = {
  auth: null
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet/>
})
