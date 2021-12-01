import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown'
import { useState } from 'react';
import InputContainer from './containers/InputContainer';




function App() {

let [head, setHead] = useState('jim');
let [torso, setTorso] = useState('fit');
let [bottom, setBottom] = useState('fit');
let [slogan, setSlogan] = useState([]);

const handleChange = () => {



}

  return (
    <div className="App">
     <InputContainer />
    </div>
  );
}

export default App;
