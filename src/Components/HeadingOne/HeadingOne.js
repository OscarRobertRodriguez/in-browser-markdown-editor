
import React from "react";

const HeadingOne = ({children, type}) => {
    return  (
    React.createElement(
        type, // type
        { type: type }, // props
         children // children
      )
      )
}

export default HeadingOne; 