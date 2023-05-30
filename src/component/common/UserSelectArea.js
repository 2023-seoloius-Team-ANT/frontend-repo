import React, { useState } from "react";
import './UserSelectArea.css';

const UserSelectArea = () =>{
    const [state, setState] = useState(true);
    const changeId = () => { setState(!state);}
    return(
        <div id="UserSelectBtns">
            <input 
                type="button" 
                name="senior"
                value="고령자" 
                className="UserSelect" 
                id={state ? "SeniorAbledBtn" : "DisabledBtn"} 
                onClick={changeId}
                />
            <input 
                type="button" 
                name="senior"
                value="요양사" 
                className="UserSelect" 
                id={state ? "DisabledBtn" : "CareAbledBtn"} 
                onClick={changeId}
                />

        </div>
    );
}

export default UserSelectArea;