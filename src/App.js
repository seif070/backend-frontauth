import './App.css';
import Register from './components/register/Register'
import Login from './components/login/Login'
import {Routes,Route} from 'react-router-dom'
import PrivateRoute from './components/privateroute/PrivateRoute'

function App() {
  return (
    <div className="App">
<Routes>
<Route path="/" element={<Register/>}/>
<Route path="/Login"element={<Login/>}/>
<Route path="/app/privateRoute"element={<PrivateRoute/>}/>


</Routes>



    </div>
  );
}

export default App;
