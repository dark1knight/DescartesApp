import logo from './logo.svg';
import './App.css';
import GeolocationComponent from "./GeolocationComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          <GeolocationComponent />
        </p>
        
      </header>
    </div>
  );
}

export default App;
