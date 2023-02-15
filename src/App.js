import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import DisplayCount from './Components/DisplayCount/DisplayCount';
import PostList from './Components/PostList/PostList';

function App() {


  let postArray = [
    {'name': "Christian", 'post': "Go Eagles!" },
    {'name': "Joe", 'post': "Let's get pizza"},
    {'name': "Vaida", 'post': "I hate football, let's go shopping"}
  ]

  return (
    <div className="App">
      <h1>Socialfeed</h1>
      <PostList postArray={postArray} />
      <Button />
      <DisplayCount />
    </div>
  );
}

export default App;
