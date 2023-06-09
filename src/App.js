import './App.css';
import LocalStorage from './Components/LocalStorage';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Sum from './Components/Sum';
import Fcomonent from './Components/Fcomonent';
import Ccomponent from './Components/Ccomponent';
import StudentMark from './Components/StudentMark';
import BgColor from './Components/BgColor';
import Form from './Components/Form';
import GetApi from './Components/GetApi';

function App() {
  return (
    <Router>    
      <Navbar />
      <>
      <Routes>
        <Route path='/' element={<Sum/>}/>
        <Route path='/Sum' element={<Sum/>}/>
        <Route path='/LocalStorage' element={<LocalStorage/>}/>
        <Route path='/function' element={<Fcomonent/>}/>
        <Route path='/class' element={<Ccomponent/>}/>
        <Route path='/StudentMark' element={<StudentMark/>}/>
        <Route path='/BgColor' element={<BgColor/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/getapi' element={<GetApi/>}/>
      </Routes>
      
    </>
    </Router>

  );
}

export default App;
