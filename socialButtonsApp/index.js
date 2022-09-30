const Button = (props) => {
  //  Write your code here.
  let { buttonName, className } = props;
  return <button className={className}>{buttonName}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div>
      <h1 className="heading">Social Button</h1>
    </div>
    <div className="btn-container">
      <Button className="like-btn" buttonName="Like" />
      <Button className="comment-btn" buttonName="Comment" />
      <Button className="share-btn" buttonName="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
