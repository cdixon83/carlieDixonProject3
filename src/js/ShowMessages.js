import {useState, useEffect} from 'react';
import firebase from '../firebase';


const ShowMessages = ({nameSearched}) => {
    const [messages, setMessages] = useState([]);
    const dbRef = firebase.database().ref(`/${nameSearched.toLowerCase()}`);

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
            // call setMessages to updated component's stats using newMessages array
            setMessages(showMessages);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

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