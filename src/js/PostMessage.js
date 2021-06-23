import {useState} from 'react';
import NameInput from './NameInput';

const PostMessage = ({handleNameChange, setNameInput, nameInput, dbRef}) => {
    const [messageInput, setMessageInput] = useState('');

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
            return (
                alert("Your friends will never know how awesome they are if you don't enter their name and a message!")
            )
        } 
        dbRef.push(messageInput)
        setMessageInput('')
        setNameInput('')
        alert("Thank you for spreading good vibes!")
    };

    return (
        <>
            <form action="submit" className="giveCompliment">
                <NameInput 
                    handleNameChange={handleNameChange} 
                    nameInput={nameInput}
                    name='Name of friend:'
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