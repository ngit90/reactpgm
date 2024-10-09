import React,{useRef,useState} from 'react'

export default function Newcomp4() {

    const inputref = useRef(null);
    const [value,setValue] = useState("");

    const handlesubmit = (event)=> {
        event.preventDefault();
        setValue(inputref.current.value);
        inputref.current.value = "";
    }
  return (
    <div>
        <h1> Data from input : {value}</h1>
      <form onSubmit={handlesubmit}>
    <input type='text' ref={inputref} />
    <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
