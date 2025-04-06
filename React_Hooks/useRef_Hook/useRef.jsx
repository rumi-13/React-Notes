import { useState, useEffect, useRef } from "react";

function App() {
  const [userName, setName] = useState("");
  const [count, setCount] = useState(0);

  // USecase 1 of useRef is to create a mutable var without re-render
  // useEffect(()=>{
  //   setCount(prev=> prev+1)
  // }, [userName])  //gives 2 renders at initial with dependancy and withiut dep we stuck in infinite loop

  const counter = useRef(0); //returns an obj with current property

  useEffect(() => {
    counter.current = counter.current + 1; // Correct usage of useRef
  });

  // USecase 2 accessing dom elements (document.el trype in vnilla) but here we use useref
  const [useRinput, setRinput] = useState("");
  const inputEl = useRef(null); // Ensure it's initialized with null

  const handleClick = () => {
    if (inputEl.current) {
      console.log("Ref Current:", inputEl.current); // Debugging
      console.log("Input Value:", inputEl.current.value); // Debugging
      setRinput(inputEl.current.value); // Correctly updating state
    }
  };
  return (
    <>
      <div className="text-2xl m-10">
        <input
          type="text"
          className="bg-gray-500 text-black"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h1>Name: {userName}</h1>
        <h1>Total render: {counter.current} times</h1>
      </div>

      <div className="text-2xl m-10">
        <input
          type="text"
          name=""
          id=""
          className="bg-gray-500 text-black"
          ref={inputEl}
        />
        <button className="bg-gray-500 m-2 text-black" onClick={handleClick}>
          Click Here
        </button>
        <h1>input is {useRinput}</h1>
      </div>
    </>
  );
}

export default App;
