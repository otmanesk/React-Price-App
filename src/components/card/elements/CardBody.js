import React from "react";
import getClasses from "../../../Helpers/getClasses";

const CardBody = ({ text }) => {
  return (
    <div class="card">
      <div className={getClasses("card-body")}>{text}</div>
    </div>
  );
};
