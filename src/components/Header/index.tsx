import { Languages, Moon, SunMedium } from 'lucide-react'
import { useState } from 'react'

import { Select } from '../../primitives/Select'
import { ButtonToggleTheme } from '../ButtonToggleTheme'
import { ContentBox, HeaderBox } from './styles'

export function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function handleToggleTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <HeaderBox>
      <ContentBox>
        <strong>
          <Languages size={28} strokeWidth={1.2} />
          Dictionary
        </strong>

        <div>
          <Select placeholder="Font" />
          <ButtonToggleTheme title="Toggle theme" onClick={handleToggleTheme}>
            {isDarkTheme ? (
              <Moon strokeWidth={2} size={20} />
            ) : (
              <SunMedium strokeWidth={2} size={20} />
            )}
          </ButtonToggleTheme>
        </div>
      </ContentBox>
    </HeaderBox>
  )
}
