import logo from './logo.svg'
import './App.css';

import './Components/WeatherApp/WeatherApp.css'

import WeatherApp from './Components/WeatherApp/WeatherApp';


function App() {
  return (
    <div className="App">
      <div className='App-hearder'>
        <img src={logo} className="App-logo" alt="" />
        <h1>Weather App In React</h1>
      </div>

      <WeatherApp/>
    </div>
  );
}

export default App;
