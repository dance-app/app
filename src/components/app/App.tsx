import { NextUIProvider } from "@nextui-org/react";

import { RouterProvider } from "@router";

import './App.css'

export const App = () => (
  <NextUIProvider>
    <RouterProvider />
  </NextUIProvider>
)

