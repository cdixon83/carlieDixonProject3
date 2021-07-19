import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function AlertView({ setShowAlertView }) {
  const element = <FontAwesomeIcon icon={faTimes} />

  const handleAlertClick = (event) => {
    event.preventDefault();
    setShowAlertView(false);
  };

  return (
    <div className="alertParent">
      <div className="alert">
        <button onClick={handleAlertClick}><span className="sr-only">close alert</span>{element}</button>
        <p>But wait, we don't know who you are, how can we find all of your wonderful messages if you don't enter your name?</p>
      </div>
    </div>
  );
};

export default AlertView;