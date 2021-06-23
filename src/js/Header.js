import header from "../assets/header.jpg";

const Header = ({setViewMessages, setViewPostMessage, setNameInput}) => {
    // fires when user selects to post a message
    // mounts PostMessage component 
    // ensures ShowMessages component is not mounted
    const handlePostMessageClick = (event) => {
        event.preventDefault();
        setViewMessages(false);
        setViewPostMessage(true);
        setNameInput('');
    };

    // fires when user selects to go to messages
    // mounts the ShowMessages component
    // ensures PostMessage component is not mounted
    const handleShowMessageClick = (event) => {
        event.preventDefault();   
        setViewMessages(true);
        setViewPostMessage(false);
        setNameInput('');
    };

    return (
        <>
            <div className="outerFlexbox wrapper">
                <h1>Good Vibes Only</h1>
                <div className="innerFlexbox">
                    <div>
                    <button className="nav" onClick={handlePostMessageClick}>Give a compliment</button>
                    </div>
                    <div>
                    <button className="nav" onClick={handleShowMessageClick}>See my messages</button>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src={header} alt="Neon Rainbow Heart." />
            </div>
        </>
    )
}

export default Header;