
import React, { useState, useCallback,useMemo} from 'react';



 const newfun6 = React.memo(function Newcomp6() {
    const [number, setNumber] = useState(0);

    const memofun = useCallback((n)=> {
        let sumdata = 0;
        for(let i=1;i<=n;i++)
          sumdata+=i;
        return sumdata;
      },[]);

    const memoval = useMemo(()=> {
      const sum = (n)=> {
        let sumdata = 0;
        for(let i=1;i<=n;i++)
          sumdata+=i;
        return sumdata;
      }
      return sum(number);
    },[number]);
  return (
    <div>
        <h1>Sum Calculator</h1>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
            />
            <p>Sum of {number} is {memofun(number)}</p>
            <p>Sum of {number} is {memoval}</p>
    </div>
  )
});

export default newfun6;