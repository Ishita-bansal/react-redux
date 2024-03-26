import React from 'react';
import "./App.css";
function App() {
  return (
    <div>
          <div class="container">
            <h1 style={{textAlign:"center"}}>Increment/Decrement counter</h1>
            <h4 style={{textAlign:"center"}}>using React and Redux</h4>
            <div class="quantity">
               <a class="quantity__minus" title="Decrement"><span> - </span></a>
               <input name="quantity" type="text" class="quantity_input" value="0"/>
               <a class="quantity_plus" title="increment"><span>+</span></a>
            </div>
          </div>
    </div>
  )
}

export default App;
