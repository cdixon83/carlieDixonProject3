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
        <header>
            <div className="outerFlexbox wrapper">
                <h1>Good Vibes Only</h1>
                <div className="innerFlexbox">
                    <div>
                    <button className="nav compliment" onClick={handlePostMessageClick}>Give a compliment</button>
                    </div>
                    <div>
                    <button className="nav" onClick={handleShowMessageClick}>See my messages</button>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <div className="textContainer">
                    <p className="intro">Need some positive vibes today? People think you are totally awesome and they are telling you why in your messages. Your friends need a boost too.  Leave them a message so they know someone cares.  Social media can be a positive place, if we all spread love, joy and motivation.</p>
                </div>
                <img src={header} alt="Neon Rainbow Heart." />
            </div>
        </header>
    )
}

export default Header;