import { FormHTMLAttributes } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> { }

export const Form = ({ children, ...props }: FormProps) => <form {...props}>{children}</form>
