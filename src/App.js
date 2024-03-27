import React from 'react';
import "./App.css";
import {useSelector , useDispatch} from "react-redux"
import {incNumber,decNumber} from "./action/index";
function App() {
   const myState = useSelector((state)=> state.changeThNumber);
  const dispatch = useDispatch();
   return (
    <div>
          <div class="container">
            <h1 style={{textAlign:"center"}}>Increment/Decrement counter</h1>
            <h4 style={{textAlign:"center"}}>using React and Redux</h4>
            <div class="quantity">
               <a class="quantity__minus" title="Decrement"  onClick={()=>dispatch(decNumber)}><span> - </span></a>
               <input name="quantity" type="text" class="quantity_input" value={myState}/>
               <a class="quantity_plus" title="increment"  onClick={ ()=>dispatch(incNumber()) }><span>+</span></a>
            </div>
          </div>
    </div>
  )
}

export default App;
