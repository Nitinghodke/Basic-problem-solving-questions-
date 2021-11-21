import React,{useState} from 'react'
import Form from './Form'


function Home() {
    const[state,setstate]=useState(0)

    function add(){
      setstate(state + 1);
    }

    function sub(){
        setstate(state-1);
      }
    return (
        <>
             <div style={{backgroundColor:"red", display:'inline-block',textAlign:'center',color:"yellow",borderRadius:'10px'}}>
             <h1>{state}</h1>
             <button onClick={add}>add</button>
             <button onClick={sub}>sub</button>
             </div>
             <hr />
            <Form />
        </>
    )
}

export default Home

