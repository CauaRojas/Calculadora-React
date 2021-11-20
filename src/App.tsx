import React, { useState } from "react";
import CalcButton from "./CalculatorButton";
import Display from "./Display";
import "./styles/App.css";

function App() {
    const [calculatorText, setCalculatorText] = useState("");

    const lastLetterIsOperator = (): boolean => {
        const letter = calculatorText[calculatorText.length - 1];
        return (
            letter === "+" || letter === "-" || letter === "/" || letter === "*"
        );
    };
    const hasOperator = (): boolean => {
        // eslint-disable-next-line no-useless-escape
        return calculatorText.search(/([+*\/-])/gm) > 0;
    };
    const addCalculatorTextNumber = (text: string) => {
        if (lastLetterIsOperator())
            setCalculatorText(calculatorText + " " + text);
        else setCalculatorText(calculatorText + text);
    };
    const AddCalculatorTextOperation = (text: string) => {
        if (!lastLetterIsOperator() && calculatorText !== "")
            setCalculatorText(calculatorText + " " + text);
        else if (calculatorText === "") setCalculatorText("0 " + text);
        else
            setCalculatorText(
                calculatorText.replace(
                    calculatorText[calculatorText.length - 1],
                    text
                )
            );
    };
    const RemoveCalculatorText = (e: string) => {
        setCalculatorText(
            calculatorText.substring(0, calculatorText.length - 2)
        );
    };
    const Calculate = () => {
        if (lastLetterIsOperator() || calculatorText === "" || !hasOperator()) {
            alert("Por favor insira uma operação valida para calcular!");
            return;
        }
    };

    return (
        <>
            <main>
                <section>
                    <Display text={calculatorText} />
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
                        <CalcButton value="C" Click={RemoveCalculatorText} />
                        <CalcButton
                            value="/"
                            Click={AddCalculatorTextOperation}
                        />
                    </div>
                    <CalcButton value="=" Click={Calculate} />
                </section>
            </main>
        </>
    );
}

export default App;
