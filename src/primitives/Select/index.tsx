import * as SelectComponent from '@radix-ui/react-select'
import { ChevronRight } from 'lucide-react'

import { SelectItem } from './components/SelectItem'
import { ContentBox, Trigger, Viewport } from './styles'

interface SelectCompProps {
  placeholder?: string
}

export function Select({ placeholder }: SelectCompProps) {
  const OPTIONS = [
    { id: 1, value: 'Mono', font: 'mono' },
    { id: 2, value: 'Sans', font: 'sans' },
    { id: 3, value: 'Serif', font: 'serif' },
  ]

  return (
    <SelectComponent.Root>
      <Trigger>
        <SelectComponent.Value placeholder={placeholder} />
        <ChevronRight width={18} strokeWidth={1.5} />
      </Trigger>

      <SelectComponent.Portal>
        <ContentBox position="popper" sideOffset={5}>
          <Viewport>
            {OPTIONS.map((option) => {
              return (
                <SelectItem font={option.font} value={option.value} key={option.id}>
                  {option.value}
                </SelectItem>
              )
            })}
          </Viewport>
        </ContentBox>
      </SelectComponent.Portal>
    </SelectComponent.Root>
  )
}
