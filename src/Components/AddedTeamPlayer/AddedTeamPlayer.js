/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faHandHoldingUsd,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AddedTeamPlayer = (props) => {
  const member = props.team;

  var totalSalary = 0;

  const total = member.reduce((sum, member) =>sum + member.Salary,0)


  for (let i = 0; i < member.length; i++) {
    const total = member[i];
    totalSalary = totalSalary + total.Salary;
  }
  return (
    <div>
      <h1>My Teams Player</h1>
      <h3>Total Players : {member.length} </h3>
      <h5>
        Total Salary: <FontAwesomeIcon icon={faHandHoldingUsd} /> {total}
      </h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {member.map((player) => (
            <tr>
              <td>
                {" "}
                <FontAwesomeIcon icon={faUser} /> {player.name}
              </td>
              <td>{player.Role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddedTeamPlayer;
