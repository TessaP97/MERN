import Home from "./components/Home"
import {Router} from "@reach/router"
import EditComponent from "./components/EditComponents/EditComponent"
import DetailComponent from "./components/DetailComponent/DetailComponent"

function App() {
  return(
    <div>
      <Router>
        <Home path="/" />
        <DetailComponent path="/:product_id" />
        <EditComponent path="/:product_id/edit" />
      </Router>
    </div>
  );
}

export default App;
