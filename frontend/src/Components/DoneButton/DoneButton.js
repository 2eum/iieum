import React from "react";
import * as e from "./DoneButton.elements";
import * as g from "../../globalStyles";

const DoneButton = () => {
  
  return (
    <e.ButtonWrapper>
      <g.DefaultButton>
        <e.ButtonIconArea>
          <e.ButtonIcon className="fa fa-check"/>
        </e.ButtonIconArea>
        다 썼어요
      </g.DefaultButton>
    </e.ButtonWrapper>
  )

}

export default DoneButton;