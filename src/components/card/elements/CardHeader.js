import React from "react";
import getClasses from "../../../Helpers/ClassNames";

const CardHeader = props => {
  return <div className={getClasses("card-header")}>{props.headerTitle}</div>;
};
