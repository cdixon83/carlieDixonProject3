import './App.scss';
import { useState } from 'react';

import ShowMessages from './ShowMessages';
import PostMessage from './MessagePost';
import NameInput from './NameInput';

function App() {
  const [viewMessages, setViewMessages] = useState(false);
  const [viewPostMessage, setViewPostMessage] = useState(false);
  const [showMyMessages, setShowMyMessages] = useState(false);
  const [nameInput, setNameInput] = useState('');


  // fires when user selects to go to messages
  // mounts the ShowMessages component
  // ensures PostMessage component is not mounted
  const handleShowMessageClick = (event) => {
    event.preventDefault();   
    setViewPostMessage(false);
    setViewMessages(true);
  };

  // fires when user selects to post a message
  // mounts PostMessage component 
  // ensures ShowMessages component is not mounted
  const handlePostMessageClick = (event) => {
    event.preventDefault();
    setViewMessages(false);
    setViewPostMessage(true);
  };

  // fires every time the nameInput changes
  const handleNameChange = (event) => {
    setNameInput(event.target.value);
    // reset showMyMessages when user types new name while viewing messages
    setShowMyMessages(false)
  }

  const handleShowMessages = (event) => {
    event.preventDefault();
    setShowMyMessages(true);
  }

  return(
    // ShowMessages will mount with 
    // second component will mount when post message button is pushed
    <>
      <button onClick={handlePostMessageClick}>Post a Message</button>
      <button onClick={handleShowMessageClick}>View My Messages</button>

      {
        viewMessages === true
        ? 
        <>
          <NameInput 
            handleNameChange={handleNameChange} 
            nameInput={nameInput}
          />
          <button onClick={handleShowMessages}>Get my Messages</button>
          {
            showMyMessages === true
            ?
            <ShowMessages nameSearched={nameInput} />
            : null
          }
        </>
        : null
      }

      {
        viewPostMessage === true
        ? 
        <>
          
          <PostMessage 
            handleNameChange={handleNameChange}
            nameInput={nameInput}
            setNameInput={setNameInput}
          />
        </>
        : null
      }
    </>
  )

}

export default App;
