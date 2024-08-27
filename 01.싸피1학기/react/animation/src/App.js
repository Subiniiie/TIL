import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Slide from './components/Slide';
import Scrolling from './components/Scrolling'
import Rotation from './components/Rotation'
import Motion from './components/Motion'
import Card from './components/Card'
import Masuri from './components/Masuri'
import Pokemon from './components/Pokemon'

function App() {
return (
  <div>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/slide' element={<Slide />}></Route>
        <Route path='/scrolling' element={<Scrolling />}></Route>
        <Route path='/rotation' element={<Rotation />}></Route>
        <Route path='/motion' element={<Motion />}></Route>
        <Route path='/card' element={<Card />}></Route>
        <Route path='/masuri' element={<Masuri />}></Route>
        <Route path='/pokemon' element={<Pokemon />}></Route>
    </Routes>
  </div>
  )
}

export default App;
