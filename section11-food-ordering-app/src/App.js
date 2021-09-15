
import './App.css';
import {useState} from 'react';
import Button from './components/UI/Button/Button';

function App() {
const [showParagraph, setShowParagraph] = useState(false)  
const toggleParagraphHandler=()=>{
  setShowParagraph((prevParagraph)=>!prevParagraph);
}
  return (
    <div className="app">
      <h1>Hello {Math.random()}</h1>
      {showParagraph&&<p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
