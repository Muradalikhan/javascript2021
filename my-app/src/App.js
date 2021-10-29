
import './App.css';
import CardComp from './componant/card/CardComponant';
import FilterComp from './componant/filter/filter';
import Quizapp from './componant/quizapp/Quizapp';
import Signup from './componant/quizapp/signup';
import { useState } from 'react';

function App() {


  let [compControll,setCompControll]=useState(true)


 
  return (
    <div className="App">
     {/* <CardComp></CardComp> */}
     {/* <FilterComp></FilterComp> */}
      
     <Signup ></Signup>
     
    </div>
  )
}

export default App;
