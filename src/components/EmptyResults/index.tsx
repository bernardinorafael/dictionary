import { Search } from 'lucide-react'

import { EmptyResultsBox } from './styles'

export function EmptyResults() {
  return (
    <EmptyResultsBox>
      <Search size={94} strokeWidth={1.1} />
      <strong>No results expected, would you like to search a word?</strong>
    </EmptyResultsBox>
  )
}
