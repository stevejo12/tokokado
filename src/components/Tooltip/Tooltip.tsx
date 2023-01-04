import React from 'react'

import "./Tooltip.scss";

interface IProps {
  text: string;
  children: any;
}

const Tooltip = ({ text, children }: IProps) => {

  return (
    <div className="tooltip__container">
      {/* https://codepen.io/PhiloBeddoe/pen/oNjzeGr */}
      <div className="tooltip__wrapper" data-tooltip={text}>
        {children}
      </div>
    </div>
  )
}

export default Tooltip