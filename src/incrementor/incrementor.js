import { useState } from "react";
import "../styles.css";

function Incrementor() {
  const [num,setNum] = useState(0)

  const changeNumb = () => setNum(num + 1)
  const minNumb = () => {
      if( num > 0) {
          setNum(num - 1)
      }
      else{
          alert("თქვენ არ შეგიძლიათ 0-ზე გამოკლება");
      }
  }

  return (
    <div className="App">
        <h1>{num}</h1>
        <div>
            <button onClick={changeNumb} className={'plus'}>+</button>
            <button onClick={minNumb} className={'min'}>-</button>
        </div>

    </div>
  );
}

export default Incrementor;
