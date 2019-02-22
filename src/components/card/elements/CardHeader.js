import React from "react";
import getClasses from "../../../Helpers/getClasses";

const CardHeader = ({children, classes}) => {
  <div className={getClasses('card-header', classes)}>
        {children}
      </div>
};

export default CardHeader;