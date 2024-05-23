import { useState } from "react";

import * as math from "mathjs"

import './App.css';
import Button from './components/Button';
import Input from './components/Input';


function App() {
  
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  // for adding text in an array
  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  // for clear values
  const resetInput = () => {
    setResult("");
    setText("");
  }

  // for calculate the results
  const calculateResults = () => {
    const input = text.join("");

    setResult(math.evaluate(input))
  }


  const buttonColor = "rgb(87, 114, 23)";

  return (
    <div className="App">
      <div className='calc-frame'>
      <Input text={text} result={result}/>
        <div className='row'>
          <Button value="7" handleClick={addToText}/>
          <Button value="8" handleClick={addToText}/>
          <Button value="9" handleClick={addToText}/>
          <Button value="/" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button value="4" handleClick={addToText}/>
          <Button value="5" handleClick={addToText}/>
          <Button value="6" handleClick={addToText}/>
          <Button value="*" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button value="1" handleClick={addToText}/>
          <Button value="2" handleClick={addToText}/>
          <Button value="3" handleClick={addToText}/>
          <Button value="+" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button value="0" handleClick={addToText}/>
          <Button value="." handleClick={addToText}/>
          <Button value="=" color={buttonColor} handleClick={calculateResults}/>
          <Button value="-" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='space'></div>
        <Button value="Clear" color="rgb(224, 68, 68)" handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
