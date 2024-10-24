import React, { useContext } from 'react';
import { Newcontext } from '../Appcontext';
import { useSelector } from 'react-redux';

 function Samplecomp() {
const {username} = useContext(Newcontext);
const count = useSelector((state)=> state.counter.count);
const value = useSelector((state)=> state.counter.value);
  return (
   
    <div>
      <h2> Sample page....</h2>
      <p> data from context : {username}</p>
      <p> count : {count}</p>
      <p> value : {value}</p>
    </div>
  )
}
export default Samplecomp;
