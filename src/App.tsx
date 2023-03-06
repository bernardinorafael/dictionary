import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

import { globalStyles } from './css/global'
import { queryClient } from './libs/react-query'
import { Routers } from './routes'

globalStyles()

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </BrowserRouter>
  )
}
