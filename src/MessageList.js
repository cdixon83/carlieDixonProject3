import {useState, useEffect} from 'react';



const ShowMessages = ({dbRef}) => {
    const [messages, setMessages] = useState([]);

    useEffect (() => {
        dbRef.on('value', (response) => {
            // variable to store new state to show on app
            const newMessages = [];
            // store response from firebase .val() method gets the info wanted
            const fbData = response.val()
            // since fbData is an object, use for in loop to access each message
            for (let key in fbData){
            // push each message to newMessages array
            newMessages.push(fbData[key])
            }
            // call setMessages to updated component's stats using newMessages array
            setMessages(newMessages);
        })
    }, []);

    // return a list of messages from firebase
    return (
        <>
            <ul>
            {messages.map((message, index) => {
                return (
                <li key={messages[index]}>
                    <p>{message}</p>
                </li>
                )
            })}
            </ul>
        </>
    );
};

export default ShowMessages;