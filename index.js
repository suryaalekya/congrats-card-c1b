const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="head">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="person"
      />
      <p className="name">Kiran V</p>
      <p className="details">
        Vishnu Institute of computer education and Technology, Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
