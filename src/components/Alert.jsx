import React from "react";
import "./Alert.scss";

const Alert = ({ isAlert, setAlert }) => {
  return (
    <div className={`alert ${isAlert ? "active" : ""}`}>
      <h4 className="alertTxt">Email was Sent</h4>
      <div className="close" onClick={() => setAlert(false)}></div>
    </div>
  );
};

export default Alert;
