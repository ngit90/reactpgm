import React from 'react';
import {useNavigate} from 'react-router-dom';

function Newcomp5() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>welcome home page</h1>
      <button onClick={()=> navigate('/about')}>about</button>
    </div>
  )
}

export default Newcomp5
