import { forwardRef, type ForwardedRef } from 'react';
import { Input as InputNextUI, type InputProps } from '@nextui-org/react'

export const Input = forwardRef((
  { ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => <InputNextUI ref={ref} {...props} />)
