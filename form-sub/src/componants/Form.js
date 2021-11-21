import React, { useState } from "react";

function Form() {
  const [state, setstate] = useState();
  const [mail, setmail] = useState();
  const [opt, setopt] = useState();
  const [check, setcheck] = useState(false);



  function name(e) {
    setstate(e.target.value);
    
  }

 function mail1(e){
    setmail(e.target.value);
 }
function selectBox(e){
setopt(e.target.value)
}

function checked(e){
    setcheck(e.target.checked)
}

function onSubmitA(a) {
    a.preventDefault();
    console.log(state,mail,opt,check)
  }
  return (
    <>
      <form action="" onSubmit={onSubmitA} style={{ backgroundColor:'brown' , width:'auto'}}>
        <label htmlFor="input">Name :-</label>
        <input type="text" id="input" onChange={name} />
        <br />
        <label htmlFor="input2">Email :-</label>
        <input type="email" id="input2" onChange={mail1} />
        <br />
        <label htmlFor="select">education :- </label>
        <select name="education" id="select" onChange={selectBox}>
            <option value='emtry'>select</option>
            <option value="10th">SSC</option>
            <option value="12th">HSC</option>
            <option value="15th">Graduation</option>
        </select>
        <br />
        <input type="checkbox" onChange={checked} /><span>Accept Terms and Condtions </span>
        <br />

        <button onSubmit={name}>submit</button>
        <hr />
      
      </form>
      <h1>my Name is :-{state}</h1>
        <h1>my Email is :-{mail}</h1>
        <h1>i have completed :-{opt}</h1>
        
    </>
  );
}

export default Form;
