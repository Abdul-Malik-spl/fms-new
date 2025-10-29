import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Authenticate } from './Components/LoginSignup/Authenticate';

function App() {

  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Authenticate/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
