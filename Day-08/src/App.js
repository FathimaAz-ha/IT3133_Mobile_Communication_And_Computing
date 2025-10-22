
import react, {useState, useEffect} from "react";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = ()=> {
    setShowLogin(!showLogin)
  };

  return (
    
    <div className="App">
      
      <div className="container">
      {showLogin ? (<Login onToggle={toggleForm}/>) : (<Register onToggle={toggleForm}/>)}
      </div>
      

    </div>
  );
}

export default App;
