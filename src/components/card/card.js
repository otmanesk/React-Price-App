import React from "react";

const Card = ({children, classes}) => {
    return (
        <div className={getClasses('card', classes)}>
            {children}
        </div>
    );
}

export default Card;
