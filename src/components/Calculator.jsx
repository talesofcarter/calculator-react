import { useState, useEffect } from "react";
import Decimal from "decimal.js";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  function handleClick(value) {
    if (value === "=") {
      try {
        const evalResult = eval(display);
        const accurateResult = new Decimal(evalResult)
          .toDecimalPlaces(12)
          .toString();
        setResult(accurateResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setDisplay("");
      setResult("");
    } else if (value === "D") {
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    } else if (value === "%") {
      setDisplay((prevDisplay) => prevDisplay / 100);
    } else if (value === "negate") {
      setDisplay((prevDisplay) => prevDisplay * -1);
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          handleClick(key);
          break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
          handleClick(key);
          break;
        case "Enter":
          handleClick("=");
          break;
        case "Backspace":
          handleClick("D");
          break;
        case "c":
          handleClick("C");
          break;
        case ".":
          handleClick(".");
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick]);

  return (
    <main className="flex justify-center mt-10">
      <div className="calculator-container w-[400px]">
        {/* calculator display */}
        <div className="flex flex-col gap-y-2.5 py-10 rounded-3xl px-4 text-3xl h-40">
          <div
            className="text-4xl overflow-x-hidden whitespace-nowrap overflow-auto truncate"
            value={display}
          >
            {" "}
            {display}
          </div>
          <div className="text-right text-4xl text-emerald-500 font-bold overflow-x-hidden whitespace-nowrap overflow-hidden truncate">
            {result}
          </div>
        </div>

        {/* first button stack */}
        <div className="button-stack">
          <button onClick={() => handleClick("C")}>C</button>
          <button value="backspace" onClick={() => handleClick("D")}>
            DEL
          </button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick("/")} className="bg-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.499 11.998h15m-7.5-6.75h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM12 18.751h.007v.007H12v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>

        {/* second button stack */}

        <div className="button-stack">
          <button onClick={() => handleClick("7")}>7</button>
          <button value="8" onClick={() => handleClick("8")}>
            8
          </button>
          <button value="9" onClick={() => handleClick("9")}>
            9
          </button>
          <button
            value="*"
            onClick={() => handleClick("*")}
            className="bg-emerald-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* third button stack */}

        <div className="button-stack">
          <button value="4" onClick={() => handleClick("4")}>
            4
          </button>
          <button value="5" onClick={() => handleClick("5")}>
            5
          </button>
          <button value="6" onClick={() => handleClick("6")}>
            6
          </button>
          <button onClick={() => handleClick("-")} className="bg-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* fourth button stack */}

        <div className="button-stack">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button value="3" onClick={() => handleClick("3")}>
            3
          </button>
          <button onClick={() => handleClick("+")} className="bg-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        {/* fifth button stack */}

        <div className="button-stack">
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("negate")}>+/-</button>
          <button onClick={() => handleClick("=")} className="bg-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M3.748 8.248a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.748 15.75a.75.75 0 0 1 .75-.751h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
export default Calculator;
