import React from "react";

export default function Bloco(){
    function fnAlerta() {
        alert("teste")
        return 0;
    }

    return(
        <><div>
            <button onClick={() => fnAlerta()}>Clica em mim ai seu viadinho</button>   
        </div></>
    )

}