import './App.css';
import React from 'react';
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/v1")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <h3>
          The  and data is  from server {data}
        </h3>
    </div>
  );
}

export default App;
