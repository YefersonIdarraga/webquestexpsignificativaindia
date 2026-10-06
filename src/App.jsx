import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './routes/Routing'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routing />
      </BrowserRouter>
    </>
  )
}

export default App