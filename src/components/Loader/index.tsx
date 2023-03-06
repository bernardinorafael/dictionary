import { Loader as LoadingLucide } from 'lucide-react'

import { LoaderBox } from './styles'

export function Loader() {
  return (
    <LoaderBox>
      <LoadingLucide />
    </LoaderBox>
  )
}
