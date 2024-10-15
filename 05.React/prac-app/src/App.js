import Main from './components/Main/Main';
import Calculate from './components/Main/Calculate/Calculate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/calculate' element={<Calculate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;






