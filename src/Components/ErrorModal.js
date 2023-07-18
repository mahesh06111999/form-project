import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.errorHandler} />
      <div className="errorstyle modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button type="submit" onClick={props.errorHandler}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
