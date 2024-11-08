import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient=new QueryClient()
// step to set up the query client
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
  {/*wrapped the App component with the query client using the query client provider*/}
  <App />
  {/* use of react query devtools */}
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  </StrictMode>,
)
