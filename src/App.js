import './App.css';
import { useState } from 'react';
import DisplayCount from './Components/DisplayCount/DisplayCount';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import Button from './Components/Button/Button';


function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([{name: '', comment: ''}])

  function updateClickCount(event) {
    event.preventDefault();
    let newCount = count + 1
    setCount(newCount)
  };

  return (
    <div className="App">
      <h1>Socialfeed</h1>
      <Button updateClickCount = {updateClickCount}/>
      <DisplayCount currentCount={count} />
      <CreatePostForm />
    </div>
  );
}

export default App;
