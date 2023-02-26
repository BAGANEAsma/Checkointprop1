import logo from './logo.svg';
import './App.css';
import Profile from './Profil/Profile';
import img from './logo.svg';
function App() {
   const show=(x)=>{alert(x)} 
  return (
    <div>

      <Profile fullname='AsmaBAGANE' Bio="ing" Profession='Electrique' fct={show}>{img}</Profile>
    </div>
  );
}

export default App;
