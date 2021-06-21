import {useState} from 'react';
import firebase from '../firebase';
import NameInput from './NameInput';



const PostMessage = ({handleNameChange, setNameInput, nameInput}) => {
    const [messageInput, setMessageInput] = useState('');
    const dbRef = firebase.database().ref(`/${nameInput}`);
    // fires every time the messageInput changes
    const handleMessageChange = (event) => {
        setMessageInput(event.target.value);
    };

    // check if nameSearched is valid
    // fires on message submit
    // pushes messageInput to fb
    // resets messageInput
    const handlePost = (event) => {
        event.preventDefault();

        if (nameInput === '' || messageInput === '') {
            return (
                alert("Your friends will never know how awesome they are if you don't enter their name and a message!")
            )
        } 
        dbRef.push(messageInput)
        setMessageInput('')
        setNameInput('')
    };

    return (
        <>
            <NameInput 
                handleNameChange={handleNameChange} 
                nameInput={nameInput}
            />
            <form action="submit">
                <label htmlFor="newMessage">Tell your friend why they are totally awesome</label>
                <textarea 
                    id="newMessage" 
                    onChange={handleMessageChange}
                    value={messageInput}
                />
                <button onClick={handlePost}>Send Message</button>
            </form>
        </>
    );
};

export default PostMessage;