import { ReactNode } from "react";

type FormProps = {
  children: ReactNode
} 

export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form {...props}>
      {children}
    </form>
  )
}
