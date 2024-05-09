// import React, { useEffect, useState } from 'react'

// function Abc() {
//     const [timer, setTimer] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);

//     useEffect(()=>{
//         let timeInterval;
//         if(isRunning){
//             timeInterval = setInterval(()=>{
//                 setTimer((ps=>ps+1));
//             },1000)
//         }else{
//             clearInterval(timeInterval)
//         }
//         return () =>{
//             clearInterval(timeInterval)
//         }
//     },[isRunning])

//     const handlestartPauseClick = () =>{
//       setIsRunning((ps=>!ps))

//     }
//     const handleReser = () =>{
//         setTimer(0);
//         setIsRunning(false);
//     }
//     const fromattime = (e) =>{
//         const hrs = Math.floor(e/3600)
//         const ms = Math.floor(e%3600/60)
//         const ss = Math.floor(e%60)
//         return `${hrs.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`
//     }
//   return (
//     <div>
//         <p>{fromattime(timer)}</p>
//         <button onClick={handlestartPauseClick}>{isRunning ? 'pause' :'start'}</button>
//         <button onClick={handleReser}>Reset</button>
//     </div>
//   )
// }

// export default Abc

import React, { useState } from 'react'

function Abc() {
    const [item, setItem] = useState('');
    const [data, setData] = useState([]);

    const hanldeTodo = () =>{
        setItem('');
        setData([...data, item])
    }
  return (
    <div>
        <button onClick={hanldeTodo}>Add TodoList</button>
        <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
        {
            data.map((item, index)=>{
                return(
                    <>
                    <li key={index}>{item}</li>
                    </>
                )
            })
        }
    </div>
  )
}

export default Abc