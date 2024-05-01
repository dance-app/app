import { Button as ButtonNextUi } from '@nextui-org/react'
import type { ButtonProps as ButtonNextUiProps } from '@nextui-org/react'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
} & ButtonNextUiProps

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonNextUi {...props}>{children}</ButtonNextUi>
}
