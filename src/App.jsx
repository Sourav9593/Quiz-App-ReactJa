import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Quiz from './components/Quiz'
import LaningPage from './components/landing page/LandingPage'
import './App.css'
import quizLogo from './assets/images-removebg-preview.png'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' exact element={<LaningPage />}/>
        <Route path='/quiz' element={<Quiz />}/>
        
      </Routes>
    </>
  )
}

export default App
