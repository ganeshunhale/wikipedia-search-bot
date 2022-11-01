import React, { useState } from "react";

function FunctionalHook() {
    const [incbutton, setIncbutton] = useState({ intialval: 0, });
    return (
        <div>
            <button onClick={() => setIncbutton(previncbutton => ({ ...previncbutton, intialval: previncbutton.intialval + 1 })


            )}>
                count {incbutton.intialval}{console.log("button clicked")}
            </button>

            {/* <button onClick={() => setIncbutton({ ...incbutton, intialval: incbutton.intialval + 1 })}>
                count {incbutton.intialval}
            </button> */}
        </div>
    );
}

export default FunctionalHook;
