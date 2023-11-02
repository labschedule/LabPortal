import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';


const ApiStatus = ({ name, status }) => {

    return (
        <div>
            {name} 
            
            {(status)?
                <FontAwesomeIcon icon={faCheck} style={{color: "#008000",}} />:
                <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",}} />
            }
            
        </div>
    );
};

export default ApiStatus;
