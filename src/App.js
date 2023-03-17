import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Order from "./order";

function App() {

  return (
    <div className="App">
      <Router>
         <Routes>
          <Route exact path = "/" element = {<Homepage/>}/>
          <Route path="/order" element = {<Order/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
