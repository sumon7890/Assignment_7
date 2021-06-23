/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import "./DisplayData.css";

const DisplayData = (props) => {
  // console.log(props);
  const { name, Age, img, Role, Salary } = props.users;
  
  //    const totalTems = props.children.Team.map(tem => <p>{tem}</p>)
  // const [handlePlyer,sethandlePlyer] = useState(false)
  return (
    <div className="display">
      <div className="card">
        <img src={img} alt="" />
        <div className="card-body">
          <h1>{name}</h1>
          <h4>Age: {Age}</h4>
          <h4>Role: {Role}</h4>
          <h4>Salary: {Salary}</h4>
          <button
            onClick={() => props.handlePlyer(props.users)}
            className="btn btn-primary"
          >
            Added My Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
