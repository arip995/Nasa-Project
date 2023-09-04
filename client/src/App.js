import './App.css';
import axios from 'axios';
function App() {

  const call = async( ) => {
    const res = await axios.get('http://localhost:8000/call');
    console.log(res)
  }
  return (
    <div className="App">
      <button onClick= {() => {call()}}>Call</button>
    </div>
  );
}

export default App;
