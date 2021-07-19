import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function AlertSend({ setShowAlertSend }) {
  const element = <FontAwesomeIcon icon={faTimes} />

  const handleAlertClick = (event) => {
    event.preventDefault();
    setShowAlertSend(false);
  };

  return (
    <div className="alertParent">
      <div className="alert">
        <button onClick={handleAlertClick}><span className="sr-only">close alert</span>{element}</button>
        <p>Your friends will never know how awesome they are if you don't enter their name and a message!</p>
      </div>
    </div>
  );
};

export default AlertSend;