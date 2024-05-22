import './App.css'
import Login from './Components/Login/Login'
import MainPage from './Components/MainPage/MainPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Login/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/main' element = {<MainPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <MainPage/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
