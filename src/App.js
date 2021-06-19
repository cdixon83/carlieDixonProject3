import './App.scss';
import firebase from './firebase';
import { useState, useEffect } from 'react';

import ShowMessages from './MessageList';
import PostMessage from './MessagePost';

function App() {
  const dbRef = firebase.database().ref();
  const [viewMessages, setViewMessages] = useState(false);
  const [viewPostMessage, setViewPostMessage] = useState(false);

  const handleViewClick = (event) => {
    event.preventDefault();
    setViewPostMessage(false);
    setViewMessages(!viewMessages);
  };

  const handlePostClick = (event) => {
    event.preventDefault();
    console.log(event)
    setViewMessages(false);
    setViewPostMessage(!viewPostMessage);
  };

  // useEffect (() => {
  //   viewMessages === true ? setViewMessages(false) : setViewMessages(true)
  // }, [viewPostMessage]);

  //   useEffect (() => {
  //   viewPostMessage === true ? setViewPostMessage(false) : setViewPostMessage(true)
  // }, [viewMessages]);

  return(
    // first component will mount when show message button is pushed
    // second component will mount when post message button is pushed
    <>
      <button onClick={handlePostClick}>Post a Message</button>
      <button onClick={handleViewClick}>View My Messages</button>

      {
        viewMessages === true
        ? <ShowMessages dbRef={dbRef}/>
        : null
      }

      {
        viewPostMessage === true
        ? <PostMessage dbRef={dbRef}/>
        : null
      }
    </>
  )

}

export default App;
