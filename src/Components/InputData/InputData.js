/* eslint-disable no-unused-vars */
/* eslint-disable no-self-compare */
import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/MOCK_DATA.json";
import DisplayData from "../DisplayData/DisplayData";
import "./InputData.css";
import AddedTeamPlayer from "../AddedTeamPlayer/AddedTeamPlayer";
const InputData = () => {
  //Data useState
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    setUsers(fakeData);
  }, []);
  //Event handlers use
  const handlePlyer = (newPlyer) => {
    const found = teams.find((x) => x.id === newPlyer.id);
    if (found === undefined) {
      console.log("Yes");
      const myTeam = [...teams, newPlyer];
      setTeams(newPlyer)
    }else{
      alert("The player already added!");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <div className="container">
            <div className="row">
              {users.map((user) => (
                <div className="col-md-4">
                  <DisplayData
                    handlePlyer={handlePlyer}
                    key={user.id}
                    users={user}
                  ></DisplayData>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="showTeam">
            <AddedTeamPlayer team={teams}></AddedTeamPlayer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputData;
