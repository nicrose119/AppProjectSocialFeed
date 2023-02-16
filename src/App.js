import './App.css';
import React, { useState } from 'react';
import Button from './Components/Button/Button';
import DisplayCount from './Components/DisplayCount/DisplayCount';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';


function App() {
  const [count, setCount] = useState(0)

  function updateClickCount(){
    let newCount = count + 1
    setCount(newCount)
  }

  return (
    <div className="App">
      <h1>Socialfeed</h1>
      <Button updateClickCount={updateClickCount} />
      <DisplayCount currentCount={count} />
      <CreatePostForm />
    </div>
  );
}

export default App;
