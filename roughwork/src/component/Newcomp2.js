import React,{useState, useEffect} from 'react';


export default function Newcomp2() {

    const [count, setCount] = useState(0);

    // ComponentDidMount: Runs once after the initial render
    useEffect(() => {
      console.log('Component mounted');
      return ( () => {
        console.log('Component unmounted'); // ComponentWillUnmount: Runs on cleanup
      });
    }, []);
  
    // ComponentDidUpdate: Runs every time count changes
    useEffect(() => {
      console.log(`Count updated to ${count}`);
    }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}