import { Dashboard } from 'pages/Dashboard'
import { NavigationBar } from 'widgets/NavigationBar'

function App() {
  return (
    <div className='w-full h-screen flex flex-col p-8 container gap-4'>
        <NavigationBar />

        <Dashboard />
    </div>
  )
}

export default App
