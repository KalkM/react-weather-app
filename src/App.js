import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
        <br />
        <footer>
          <a
            href="https://github.com/KalkM/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open source code
          </a>{" "}
          by Kalkidan Mulugeta Diro
        </footer>
      </div>
    </div>
  );
}

export default App;
