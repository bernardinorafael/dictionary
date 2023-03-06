import { Link as LinkLucide } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ContentBox, FooterBox } from './styles'

export function Footer() {
  return (
    <FooterBox>
      <ContentBox>
        <strong>
          Made by:
          <Link target="_blank" to="https://www.linkedin.com/in/eurafaelbernardino/">
            Rafael Bernardino
            <LinkLucide size={14} />
          </Link>
        </strong>
      </ContentBox>
    </FooterBox>
  )
}
