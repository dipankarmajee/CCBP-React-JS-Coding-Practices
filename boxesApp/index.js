const Box = (props) => {
  const { box, boxContainer } = props;
  return (
    <div className={boxContainer}>
      <p>{box}</p>
    </div>
  );
};

const element = (
  <div>
    <h1>Boxes</h1>
    <div className="box-container">
      <Box boxContainer="box-small" box="Small" />
      <Box boxContainer="box-medium" box="Medium" />
      <Box boxContainer="box-large" box="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
