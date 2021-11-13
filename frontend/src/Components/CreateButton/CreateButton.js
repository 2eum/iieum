import React from "react";
import * as e from "./CreateButton.elements";
import * as g from "../../globalStyles";

const CreateButton = () => {

  return (
    <g.DefaultButton>
      <e.ButtonIconArea>
        <e.ButtonIcon className="fa fa-pen"/>
      </e.ButtonIconArea>
      질문에 답하기
    </g.DefaultButton>
  )

}

export default CreateButton;