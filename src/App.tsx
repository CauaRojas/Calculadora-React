import React, { useState } from "react";
import CalcButton from "./CalculatorButton";
import Display from "./Display";
import "./styles/App.css";

function App() {
    const [CalculatorText, setCalculatorText] = useState("");

    const lastLetterIsOperator = (): boolean => {
        const letter = CalculatorText[CalculatorText.length - 1];
        return (
            letter === "+" || letter === "-" || letter === "/" || letter === "*"
        );
    };
    const addCalculatorTextNumber = (text: string) => {
        setCalculatorText(CalculatorText + " " + text);
    };
    const AddCalculatorTextOperation = (text: string) => {
        if (!lastLetterIsOperator() && CalculatorText !== "")
            setCalculatorText(CalculatorText + " " + text);
        else if (CalculatorText === "") setCalculatorText("0 " + text);
        else
            setCalculatorText(
                CalculatorText.replace(
                    CalculatorText[CalculatorText.length - 1],
                    text
                )
            );
    };

    return (
        <>
            <main>
                <section>
                    <Display text={CalculatorText} />
                    <div className="buttons">
                        <CalcButton value="1" Click={addCalculatorTextNumber} />
                        <CalcButton value="2" Click={addCalculatorTextNumber} />
                        <CalcButton value="3" Click={addCalculatorTextNumber} />
                        <CalcButton
                            value="+"
                            Click={AddCalculatorTextOperation}
                        />
                        <CalcButton value="4" Click={addCalculatorTextNumber} />
                        <CalcButton value="5" Click={addCalculatorTextNumber} />
                        <CalcButton value="6" Click={addCalculatorTextNumber} />
                        <CalcButton
                            value="-"
                            Click={AddCalculatorTextOperation}
                        />
                        <CalcButton value="7" Click={addCalculatorTextNumber} />
                        <CalcButton value="8" Click={addCalculatorTextNumber} />
                        <CalcButton value="9" Click={addCalculatorTextNumber} />
                        <CalcButton
                            value="*"
                            Click={AddCalculatorTextOperation}
                        />
                        <CalcButton value="AC" Click={setCalculatorText} />
                        <CalcButton value="0" Click={addCalculatorTextNumber} />
                        <CalcButton value="C" Click={setCalculatorText} />
                        <CalcButton
                            value="/"
                            Click={AddCalculatorTextOperation}
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
