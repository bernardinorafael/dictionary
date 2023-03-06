import { CornerDownRight } from 'lucide-react'

import { DefinitionBox } from './styles'

interface DefinitionProps {
  definition: string
  example?: string
  title?: string
}

export function Definition({ definition, example, title }: DefinitionProps) {
  return (
    <DefinitionBox title={title}>
      <div>
        <div>
          <CornerDownRight size={22} />
        </div>
        <strong>{definition}</strong>
      </div>

      {example && <span>{example}</span>}
    </DefinitionBox>
  )
}
