import logo from './logo.svg';
import './App.css';
import ComponentA from './components/container/componentA';
import { ClockFunction } from './components/pure/clockFunction';
import ListContacts from './components7-8-9/container/list_contacts';
import Rectangle from './components10-11-12/rectangle';
import TaskFormy from './components13-14-15/taskFormy';

function App() {
  return (
    <div className="App">

        {/* <ComponentA></ComponentA> */}
        {/* <ClockFunction></ClockFunction> */}
        {/* <ListContacts></ListContacts> */}
        {/* <Rectangle></Rectangle> */}
        <TaskFormy></TaskFormy>
    </div>
  );
}

export default App;
