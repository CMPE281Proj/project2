import './App.css';
import {amplifyLogin} from './Components/amplifyLogin'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <amplifyLogin/>
      </header>
    </div>
  );
}

export default App;
