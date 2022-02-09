import './App.scss';
import React from 'react';
import RouteApp from "./Routing";
import { Switch, useHistory, useLocation } from "react-router-dom";
import Home from './components/screens/home/Home';
import Main from './components/screens/main/Main'
import Navbar from './components/screens/navbar/Navbar';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/v1")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
   <Switch>
          
          <RouteApp path={"/"} component={Home} />
        </Switch>
    </div>
  );
}

export default App;
