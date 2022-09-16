import logo from './logo.svg';
import './App.css';
import ComponentA from './components/container/componentA';
import { ClockFunction } from './components/pure/clockFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponentA></ComponentA> */}
        <ClockFunction></ClockFunction>
      </header>
    </div>
  );
}

export default App;
