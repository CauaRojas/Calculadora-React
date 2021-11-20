import React from "react";
interface CalculatorText {
    text: string;
}

export default function Display({ text }: CalculatorText) {
    return (
        <>
            <input
                type="text"
                className="display"
                disabled={true}
                value={text}
            />
        </>
    );
}
