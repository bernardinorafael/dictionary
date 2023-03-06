import { ServerCrash } from 'lucide-react'

import { ErrorsComponentBox } from './styles'

interface Error {
  title: string
  message: string
  resolution: string
}

export function ErrorsComponent({ message, resolution, title }: Error) {
  return (
    <ErrorsComponentBox>
      <ServerCrash size={94} strokeWidth={1.1} />
      <div>
        <strong>{title}</strong>
        <span>{message}</span>
        <span>{resolution}</span>
      </div>
    </ErrorsComponentBox>
  )
}
