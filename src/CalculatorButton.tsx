import React from "react";

interface ButtonCalc{
    value : string;
}

export default function CalcButton({value}:ButtonCalc){
    return(
        <>
        <button className="calculator-button">{value}</button>
        </>
    )
}