import {useState} from 'react';
import NameInput from './NameInput';
import AlertSend from './AlertSend';
import AlertSentConfirm from './AlertSentConfirm';

const PostMessage = ({handleNameChange, setNameInput, nameInput, dbRef}) => {
    const [messageInput, setMessageInput] = useState('');
    const [showAlertSend, setShowAlertSend] = useState(false);
    const [showSentConfirm, setShowSentConfirm] = useState(false);

    // fires every time the messageInput changes
    const handleMessageChange = (event) => {
        setMessageInput(event.target.value);
    };

    // fires on message submit
        // check if nameSearched is valid
        // pushes messageInput to fb
        // resets messageInput
    const handlePost = (event) => {
        event.preventDefault();

        if (nameInput === '' || messageInput === '') {
            setShowAlertSend(true);
        } else {
        dbRef.push(messageInput)
        setMessageInput('')
        setNameInput('')
        setShowSentConfirm(true)
        }
    };

    return (
        <>
            {showAlertSend === true
                ? <AlertSend setShowAlertSend={setShowAlertSend} />
                : null}

            {showSentConfirm === true
                ? <AlertSentConfirm setShowSentConfirm={setShowSentConfirm} />
                : null}

            <form action="submit" className="giveCompliment">
                <NameInput 
                    handleNameChange={handleNameChange} 
                    nameInput={nameInput}
                    name='Full name of friend:'
                />

                <label htmlFor="newMessage">Message:</label>
                <textarea 
                    id="newMessage" 
                    onChange={handleMessageChange}
                    value={messageInput}
                />
                <button onClick={handlePost} className="submit">Send compliment</button>
            </form>
        </>
    );
};

export default PostMessage;