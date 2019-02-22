import React from "react";
import getClasses from "../../../Helpers/getClasses";


const CardBody = ({children, classes}) => {
  return (
    <div className={getClasses('card-body', classes)}>
        {children}
      </div>
  );
};
