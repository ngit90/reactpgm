import React,{useState} from 'react'

export default function Newcomp3({counter}) {

const [datas,setDatas] = useState([]);

const clicker = () =>{
    setDatas([...datas,counter])
};


  return (
    <div>
      <p> CounterData : {counter} </p>
      <button onClick={clicker}> Click me</button>
      <h2>{datas.map((val,indx) => {
        return (
            <p key={indx}> item : {val}</p>
        )
      })}</h2>
    </div>
  )
}
