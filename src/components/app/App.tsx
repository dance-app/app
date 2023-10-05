import './App.css'

import { NextUIProvider } from "@nextui-org/react";
import { MainLayout } from '..';

export const App = () => (
  <NextUIProvider>
    <MainLayout />
  </NextUIProvider>
)

