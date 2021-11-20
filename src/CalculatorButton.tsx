import React from "react";

interface ButtonCalc {
    value: string;
    Click: Function;
}

export default function CalcButton({ value, Click }: ButtonCalc) {
    return (
        <>
            <button
                className="calculator-button"
                onClick={() => Click(value === "AC" ? "" : value)}
                style={{ fontSize: value === "AC" ? "5rem" : "auto" }}
            >
                {value}
            </button>
        </>
    );
}
