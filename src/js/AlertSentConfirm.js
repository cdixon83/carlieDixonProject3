import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function AlertSentConfirm({ setShowSentConfirm }) {
  const element = <FontAwesomeIcon icon={faTimes} />

  const handleAlertClick = (event) => {
    event.preventDefault();
    setShowSentConfirm(false);
  };

  return (
    <div className="alertParent">
      <div className="alert">
        <button onClick={handleAlertClick}><span className="sr-only">close alert</span>{element}</button>
        <p>Thank you for spreading good vibes!</p>
      </div>
    </div>
  );
};

export default AlertSentConfirm;