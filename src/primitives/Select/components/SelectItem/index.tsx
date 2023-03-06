import * as SelectComponent from '@radix-ui/react-select'
import { forwardRef, ReactNode } from 'react'

import { Item } from './styles'

interface ItemProps {
  children: ReactNode
  value: string
  font: string
}

const ItemComponent = ({ children, value, font }: ItemProps) => {
  return (
    <Item value={value} css={{ fontFamily: `$${font}` }}>
      <SelectComponent.ItemText>{children}</SelectComponent.ItemText>
    </Item>
  )
}

export const SelectItem = forwardRef(ItemComponent)
