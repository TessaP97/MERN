import {Router} from "@reach/router"
import './App.css';
import ListComponent from './components/ListComponent';
import CreateComponent from './components/CreateComponent';
import DetailComponent from "./components/DetailComponent";

function App() {
  return (
    <div style={{padding: "20px"}}>
      <Router>
        <ListComponent path="/pirates"/>
        <CreateComponent path="/pirate/new"/>
        <DetailComponent path="/pirate/:pirate_id"/>
      </Router>
    </div>
  );
}

export default App;
