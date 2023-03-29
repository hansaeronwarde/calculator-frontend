import { useState } from "react";
import Button from "../components/Button";
import History from "./History";

function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [operand, setOperand] = useState("");
  const [equation, setEquation] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [history, setHistory] = useState(false);

  const numButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0"];
  const operandButton = ["÷", "×", "−", "+", "="];
  const clearInput = () => {
    setInput("");
    setAnswer("");
    setOperand("");
    setEquation("");
    setPrevInput("");
  };

  const handleInput = (e) => {
    setAnswer("");
    if (input.includes(".") && e.target.value === ".") {
      setInput(input);
    } else {
      setInput(input + e.target.value);
    }
  };

  const handleOperand = (e) => {
    setOperand(e.target.value);
    if (prevInput === "") setPrevInput(input);
    if (prevInput !== "" && input !== "") {
      let operandAnswer = calculate();
      setAnswer(operandAnswer);
      setPrevInput(operandAnswer);
    }
    setInput("");
  };

  const toggleSignedInput = () => {
    if (input.includes("-")) {
      setInput(input.replace("-", ""));
    } else {
      setInput("-" + input);
    }
  };

  const percentInput = () => {
    setInput(+input * 0.01);
  };

  const handleEquals = () => {
    setEquation(prevInput + operand + input);
    setAnswer(calculate());
    setInput(answer);
  };

  const handleHistory = () => {
    setHistory(!history);
    console.log(history);
  };

  const calculate = () => {
    switch (operand) {
      case "+":
        return +prevInput + +input;
      case "−":
        return +prevInput - +input;
      case "×":
        return +prevInput * +input;
      case "÷":
        return +prevInput / +input;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex h-screen flex-col place-content-center bg-[#292A2D]">
        <div className="self-center">
          <div className="text-5xl p-2 w-100 h-14 text-[#5B5E67] text-right">
            {equation}
          </div>
          <div className="text-8xl p-2 w-100 h-28 overflow-hidden text-white text-right">
            {answer !== "" ? answer : input !== "" ? input : prevInput}
          </div>
          <div className="flex flex-row">
            <div>
              <div className="grid grid-cols-3 grid-rows-1">
                <button
                  onClick={() => clearInput()}
                  className="w-24 h-24 bg-[#5B5E67] text-4xl text-white rounded-lg m-1"
                >
                  AC
                </button>
                <button
                  value="+/-"
                  className="w-24 h-24 bg-[#5B5E67] text-4xl text-white rounded-lg m-1"
                  onClick={() => toggleSignedInput()}
                >
                  +/-
                </button>
                <button
                  value="%"
                  className="w-24 h-24 bg-[#5B5E67] text-4xl text-white rounded-lg m-1"
                  onClick={() => percentInput()}
                >
                  %
                </button>
              </div>
              <div className="grid grid-cols-3 grid-rows-4">
                {numButtons.map((num, index) => (
                  <Button
                    key={index}
                    bgColor="bg-[#5B5E67]"
                    value={num}
                    onClick={handleInput}
                  />
                ))}
                <button className="w-24 h-24 bg-[#5B5E67] text-4xl text-white rounded-lg m-1">
                  <div className="flex justify-center">
                    <svg
                      width={48}
                      height={41}
                      fill="white"
                      onClick={handleHistory}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M28.5714 11.3889H25.1429V22.7778L34.9257 28.5633L36.5714 25.8072L28.5714 21.0694V11.3889ZM27.4286 0C21.9727 0 16.7403 2.15981 12.8824 6.00431C9.02448 9.84881 6.85714 15.0631 6.85714 20.5H0L9.05143 29.6794L18.2857 20.5H11.4286C11.4286 16.2713 13.1143 12.2157 16.1149 9.22557C19.1154 6.23541 23.1851 4.55556 27.4286 4.55556C31.672 4.55556 35.7417 6.23541 38.7423 9.22557C41.7429 12.2157 43.4286 16.2713 43.4286 20.5C43.4286 24.7287 41.7429 28.7843 38.7423 31.7744C35.7417 34.7646 31.672 36.4444 27.4286 36.4444C23.0171 36.4444 19.0171 34.645 16.1371 31.7522L12.8914 34.9867C16.6171 38.7222 21.7143 41 27.4286 41C32.8845 41 38.1169 38.8402 41.9748 34.9957C45.8327 31.1512 48 25.9369 48 20.5C48 15.0631 45.8327 9.84881 41.9748 6.00431C38.1169 2.15981 32.8845 0 27.4286 0Z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              {operandButton.map((operand, index) => (
                <Button
                  key={index}
                  bgColor="bg-[#3764B4]"
                  value={operand}
                  onClick={operand === "=" ? handleEquals : handleOperand}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {history && <History onClick={handleHistory}></History>}
    </>
  );
}
export default Calculator;
