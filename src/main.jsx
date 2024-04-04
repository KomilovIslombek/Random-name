import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { StudentProvider } from './context/StudentsContext'
import './index.css'
import Home from './pages/home/Home'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StudentProvider>
			<QueryClientProvider client={queryClient}>
				<Home />
			</QueryClientProvider>
		</StudentProvider>
	</React.StrictMode>
)
