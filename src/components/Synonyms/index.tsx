import { SynonymsBox } from './styles'

interface SynonymsProps {
  synonyms: string[]
}

export function Synonyms({ synonyms }: SynonymsProps) {
  console.log(synonyms)

  return (
    <SynonymsBox>
      {synonyms && <strong>Synonyms:</strong>}

      <div>
        {synonyms.slice(0, 10).map((synonym, i) => {
          return <span key={i}>#{synonym}</span>
        })}
      </div>
    </SynonymsBox>
  )
}
