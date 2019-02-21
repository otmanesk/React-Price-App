import React from "react";
import getClasses from "../../../Helpers/getClasses";

const CardFooter = ({children, classes}) => {
  <div className={getClasses('card-footer', classes)}>
        {children}
      </div>;
};

export default CardFooter;
