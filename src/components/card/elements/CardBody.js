import React from "react";
import getClasses from "../../../Helpers/ClassNames";

const CardBody = props => {
  return (
    <div class="card">
      <div className={getClasses("card-body")}>{props.text}</div>
    </div>
  );
};
