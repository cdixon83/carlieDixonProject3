import {useState} from 'react';

const PostMessage = ({dbRef}) => {
    const [userInput, setUserInput] = useState('');

    // fires every time the input changes
    const handleMessageChange = (event) => {
        setUserInput(event.target.value);
    };

    // fires on message submit
    // pushes userInput to fb
    // resets userInput
    const handlePost = (event) => {
        event.preventDefault();
        dbRef.push(userInput);
        setUserInput('');
    };

    return (
        <>
            <form action="submit">
                {/* <label htmlFor="name">Post to:</label>
                <input type="text" id="name" /> */}
                <label htmlFor="newMessage">Tell your friend why they are totally awesome</label>
                <textarea 
                id="newMessage" 
                onChange={handleMessageChange}
                value={userInput}
                />
                <button onClick={handlePost}>Send Message</button>
            </form>
        </>
    )
};

export default PostMessage;