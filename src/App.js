
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './page/Dashboard/Dashboard';
import Exam from './page/Exam/Exam';
import Login from './page/Login/Login';
import Finish from './page/Finish/Finish';
import {ShowProvider} from './page/Exam/ShowContext'
function App() {
  return (
    <ShowProvider>
        <div className="App">
        <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/dashboard' element = {<Dashboard/>}/>
            <Route path='/exam' element={<Exam />}/> 
            <Route path='/finish' element={<Finish />}/>      
        </Routes>
      </div>
    </ShowProvider>
  );
}

export default App;
