import logo from './logo.svg';
import './App.css';
import Vegeta from './Vegeta';
import Goku from './Goku';
import { useState } from 'react';

function App() {
 const [vegeta,setvegeta]= useState(100);
 const [goku,setgoku]= useState(100);
const reducelife=(param1 ,param2)=>{
   if(param1 === 'Vegeta'){
    setgoku(goku-param2)
   }else{
    setvegeta(vegeta-param2)

   }
}
  return (
    <div className="container text-center">
       <h1>Goku vs Vegeta</h1>
       <hr/>
       <div className="row">
             <Vegeta name="Vegeta" life={vegeta} reducelife={reducelife}/>
             <Goku name="goku" life={goku} reducelife={reducelife}/>
       </div>
    </div>
  );
}

export default App;
