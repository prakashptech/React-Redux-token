
import { useEffect, useState } from 'react';
const TestComp = () =>{
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const[names, setNames] = useState([]);

const saveData = () =>{

   
    setNames([...names, {fname, lname}]);
    console.log('names',names);
    setFname(''); // clear the fname input
    setLname(' ');

    setTimeout(()=>{
        setFname('');
        setLname('');
    },0)
    
}
useEffect(()=>{
    const saveData = JSON.parse(localStorage.getItem('userdata'));
    if(saveData){
        setNames(saveData);
    }
},[])
useEffect(()=>{
    localStorage.setItem('userdata', JSON.stringify(names))
},[names])
    return (
        <div style={{backgroundColor:'lightblue'}}>
        <label>first Name</label>
        <input onChange={(e)=>setFname(e.target.value)} type='text' style={{width:'200px'}}/>
        <br/>
        <br/>
        <label>Last Name</label>
        <input onChange={(e)=>{setLname(e.target.value)}} type='text' style={{width:'200px'}}/>
        <br/>
        <br/>
        <button style={{backgroundColor:'gray'}} onClick={saveData}>Save</button>
        <br/>
        <br/>
        <br/>

        {
            names.map((e, index)=>{
                return(
                    
                    <ul key={index}>
                    <p>Fisrt Name: {e.fname} {' '}Last Name: {e.lname}</p> 
                    </ul>
                )
            })
        }
        </div>
    )
}
export default TestComp