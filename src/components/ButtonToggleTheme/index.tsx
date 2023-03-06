import { ButtonHTMLAttributes } from 'react'

import { Button } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {}

export function ButtonToggleTheme(props: ButtonProps) {
  return <Button {...props} />
}
