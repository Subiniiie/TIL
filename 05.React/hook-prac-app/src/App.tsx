import Memo from './pages/Memo'
import TodoPage from './pages/memo/TodoPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/memo" element={<Memo />}/>
      <Route path="/memo/todoPage" element={<TodoPage />}/>

    </Routes>
  )
}

export default App
