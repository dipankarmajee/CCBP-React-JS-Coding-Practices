const Notification = (props) => {
  const { className, icon, card } = props;
  return (
    <div className={className}>
      <img className="icon" src={icon} /> <p className="span-text">{card}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="info-card"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      card="Information Message"
    />
    <Notification
      className="success-card"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      card="Success Message"
    />
    <Notification
      className="warning-card"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      card="Warning Message"
    />
    <Notification
      className="danger-card"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      card="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
