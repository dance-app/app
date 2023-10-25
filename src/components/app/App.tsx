import { NextUIProvider } from "@nextui-org/react";

import { RouterProvider } from "@router";
import { QueryProvider } from "@utils";

import './App.css'

export const App = () => (
  <QueryProvider>
    <NextUIProvider>
      <RouterProvider />
    </NextUIProvider>
  </QueryProvider>
)
