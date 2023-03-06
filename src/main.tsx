import ReactDOM from 'react-dom/client'

import { App } from './App'

const container = ReactDOM.createRoot
const root = document.getElementById('root') as HTMLElement

container(root).render(<App />)
