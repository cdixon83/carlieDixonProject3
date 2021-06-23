import './App.scss';
import { useState } from 'react';
import firebase from './firebase';

import Header from './js/Header';
import ShowMessages from './js/ShowMessages';
import PostMessage from './js/PostMessage';
import NameInput from './js/NameInput';
import Footer from './js/Footer';

function App() {
  const [viewMessages, setViewMessages] = useState(false);
  const [viewPostMessage, setViewPostMessage] = useState(false);
  const [showMyMessages, setShowMyMessages] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const dbRef = firebase.database().ref(`/${nameInput.toLowerCase()}`);

  // fires every time the nameInput changes
  const handleNameChange = (event) => {
    const updatedName = event.target.value;
    setNameInput(updatedName);
    // reset showMyMessages when user types new name while viewing messages
    setShowMyMessages(false)
  }

  // mounts message component
    // message component is not mounted on load
    // message component is unmounted by change in nameInput
  const handleShowMessages = (event) => {
    event.preventDefault();
    if (nameInput === '') {
            return (
                alert("But wait, we don't know how you are, how can we find all of your wonderful messages if you don't enter your name?")
            )
        }  
    setShowMyMessages(true);
  }

  return(
    <div className="pageContainer">
      <div className="contentWrap">
        <Header 
          setViewMessages={setViewMessages} 
          setViewPostMessage={setViewPostMessage} 
          setNameInput={setNameInput}
        />
        <main>
        {viewMessages === true
          ? 
            <>
              <h2>See my Messages</h2>
              <form action="submit" className="viewMessages" onSubmit={handleShowMessages}>
                <NameInput 
                  handleNameChange={handleNameChange} 
                  nameInput={nameInput}
                  name='What is your full name?'
                />
                <button type="submit" className="submit">See messages</button>
              </form>
              {
                showMyMessages === true
                ?
                <ShowMessages 
                  dbRef={dbRef} 
                />
                : null
              }
            </>
          : null}

        {viewPostMessage === true
          ? 
            <>
              <h2>Give a compliment</h2>
              <PostMessage 
                handleNameChange={handleNameChange}
                nameInput={nameInput}
                setNameInput={setNameInput}
                dbRef={dbRef}
              />
            </>
          : null}
        </main>
      </div>
      <Footer />
    </div>
  )

}

export default App;
