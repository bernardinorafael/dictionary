import { Play } from 'lucide-react'

import { Button } from './styles'

export function PlayButton() {
  return (
    <Button>
      <Play size={32} />
      Play
    </Button>
  )
}
