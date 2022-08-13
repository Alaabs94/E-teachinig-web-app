import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import{Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />

      </Routes>
    </div>
  );
}

export default App;
