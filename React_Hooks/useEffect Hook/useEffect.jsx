import { useState, useEffect } from "react";

function App() {
  const[count, setCount] = useState(0)
  const[eCount, setEcount] = useState(0)
  const[time, setTime] = useState(0)
  const updateCount = ()=>{
    setCount(count+1)
  }


  const updateEcount = ()=>{
     setEcount(eCount+1);
   }

  useEffect(()=>{
   document.title = `${eCount} and ${count} times Clicked`
  }, [count, eCount])

  useEffect(()=>{
     const timer = setInterval(()=>{
        setTime(time+1)
      }, 1500);
      // cleanup function
      return ()=>{
        clearInterval(timer)
      }
    }, [count])


  return (
  <>
  <div className="text-4xl">
  <h1>{count} times Clicked</h1>
  <button onClick={updateCount} className="bg-blue-300 text-black rounded-sm p-2 m-7">Click Me</button>
  <h1>UseEffect used {eCount} times</h1>
  <button onClick={updateEcount} className="bg-red-300 text-black rounded-sm p-2 m-7">Click Me</button>
  <h1>The time is: {time} Seconds</h1>
  </div>
  
  </>
  );
}

export default App;
