/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import CalcButton from './CalculatorButton';
import Display from './Display';
import './styles/App.css';

function App() {
    const [calculatorText, setCalculatorText] = useState('');

    const lastLetterIsOperator = (): boolean => {
        const letter = calculatorText[calculatorText.length - 1];
        return (
            letter === '+' ||
            letter === '-' ||
            letter === '/' ||
            letter === '*' ||
            letter === '^'
        );
    };

    const hasOperator = (text: string): boolean => {
        return calculatorText.search(/([\+\*\/\-\^])/gm) > 0;
    };

    const hasLast2Numbers = (text: string): boolean => {
        return text.search(/(\d{2})$/gm) > 0;
    };

    const addCalculatorTextNumber = (text: string) => {
        if (lastLetterIsOperator())
            setCalculatorText(calculatorText + ' ' + text);
        else setCalculatorText(calculatorText + text);
    };

    const AddCalculatorTextOperation = (text: string) => {
        if (!lastLetterIsOperator() && calculatorText !== '')
            setCalculatorText(calculatorText + ' ' + text);
        else if (calculatorText === '') setCalculatorText('0 ' + text);
        else
            setCalculatorText(
                calculatorText.replace(
                    calculatorText[calculatorText.length - 1],
                    text
                )
            );
    };

    const addCalculatorTextDot = (e: string) => {
        let deconstructedText = calculatorText.split(' ');
        if (lastLetterIsOperator() || calculatorText === '')
            setCalculatorText(calculatorText + ' 0.');
        else if (
            deconstructedText[deconstructedText.length - 1].search(
                /[{\.}]/gm
            ) !== -1
        )
            return;
        else setCalculatorText(calculatorText + '.');
    };

    const RemoveCalculatorText = (e: string) => {
        setCalculatorText(
            calculatorText.substring(
                0,
                calculatorText.length -
                    (lastLetterIsOperator() ||
                    (hasOperator(calculatorText) &&
                        !hasLast2Numbers(calculatorText))
                        ? 2
                        : 1)
            )
        );
    };

    const Calculate = () => {
        if (
            lastLetterIsOperator() ||
            calculatorText === '' ||
            !hasOperator(calculatorText)
        ) {
            alert('Por favor insira uma operação valida para calcular!');
            return;
        }
        let deconstructedText = calculatorText.split(' ');
        console.log(deconstructedText);
        let result = parseFloat(deconstructedText[0]);
        for (
            let counter = 1;
            counter <= Math.floor(deconstructedText.length / 2);
            counter++
        ) {
            switch (deconstructedText[-1 + 2 * counter]) {
                case '+':
                    result += parseFloat(deconstructedText[2 * counter]);
                    break;
                case '-':
                    result -= parseFloat(deconstructedText[2 * counter]);
                    break;
                case '*':
                    result *= parseFloat(deconstructedText[2 * counter]);
                    break;
                case '/':
                    result /= parseFloat(deconstructedText[2 * counter]);
                    break;
                case '^':
                    result = Math.pow(
                        result,
                        parseFloat(deconstructedText[2 * counter])
                    );
                    break;
            }
            console.log(result);
        }
        setCalculatorText(result.toString());
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
                        <br />
                        <CalcButton value="." Click={addCalculatorTextDot} />
                        <CalcButton
                            value="^"
                            Click={AddCalculatorTextOperation}
                        />
                        <br />
                    </div>
                    <CalcButton value="=" Click={Calculate} />
                </section>
            </main>
        </>
    );
}

export default App;
