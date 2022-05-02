import './App.css';
import {Router} from "@reach/router"
import ListComponent from './components/ListComponent';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';

function App() {
  return (
    <div style={{padding: "20px"}}>
      <h1>Favorite authors</h1>
      <Router>
        <ListComponent path="/" />
        <CreateComponent path="/new" />
        <EditComponent path="/edit/:author_id" />
      </Router>
    </div>
  );
}

export default App;
