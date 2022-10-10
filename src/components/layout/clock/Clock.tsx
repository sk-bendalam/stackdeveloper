import React, { useEffect, useState } from 'react';
import * as NClock from 'react-clock';
import 'react-clock/dist/Clock.css';
function Clock() {
    const [value, setValue] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
  return (
    <div className='flex relative items-center justify-center brightness-100'>
        <NClock.default className="z-" value={value} />
        {/* <div className='absolute top-10 bg-green-500 px-2 z-1 text-black'>{value.getDate()}</div> */}
    </div>
  )
}

export default Clock