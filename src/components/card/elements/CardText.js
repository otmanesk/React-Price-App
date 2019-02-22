import React from "react";
import getClasses from "../../../Helpers/getClasses";

const CardText = ({children, classes, content}) => {
  <p className={getClasses('card-text', classes)}>
        {children || content}
      </p>;
};

export default CardText;
