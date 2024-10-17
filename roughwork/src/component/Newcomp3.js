import React,{useState,useContext} from 'react';
import { AppContext } from '../Appcontext';

export default function Newcomp3({counter}) {

const [datas,setDatas] = useState([]);
const {check, setCheck} = useContext(AppContext);
const clicker = () =>{
    setDatas([...datas,counter])
    setCheck("its ok ")
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
