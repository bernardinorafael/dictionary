import { SeparatorProps } from '@radix-ui/react-separator'

import { SeparatorRoot } from './styles'

interface SeparatorCompProps extends SeparatorProps {}

export function Separator(props: SeparatorCompProps) {
  return <SeparatorRoot {...props} />
}
