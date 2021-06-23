import {useState, useEffect} from 'react';

const ShowMessages = ({dbRef}) => {
    const [messages, setMessages] = useState([]);

    useEffect (() => {
        dbRef.on('value', (response) => {
            // variable to store new state to show on app
            const showMessages = [];
            // store response from firebase .val() method gets the info wanted
            const fbData = response.val()
            // since fbData is an object, use for in loop to access each message
            for (let key in fbData){
                // push each message to newMessages array
                showMessages.push(fbData[key])
            }
            //setMessages() to updated state using newMessages array
            setMessages(showMessages);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    // return a list of messages from firebase
    return (
        <>
            <ul>
                {messages.length === 0
                    ? 
                        <li>
                            <p>You are an amazing person who is loved!</p>
                        </li>
                    :
                        messages.map((message, index) => {
                            return (
                                <li key={messages[index]}>
                                    <p>{message}</p>
                                </li>
                            )
                        })
                }
            </ul>
        </>
    );
};

export default ShowMessages;