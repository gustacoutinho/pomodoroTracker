import { useEffect, useState } from "react";
const COUNTDOWN_INITIAL_TIME_SECONDS = 20 * 60
function App() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_SECONDS) // 30 minutos
  console.log(secondsAmount)
  useEffect(() => {
    if(secondsAmount > 0){
      setTimeout(() => {
      setSecondsAmount(state => state - 1) //para alterar o valor dependo do valor anterior, callback funcion
    }, 1000)}
    else{ 
      alert('Descanse por 5 min') 
    }
  }, [secondsAmount])

  const minutes = Math.floor(secondsAmount / 60) 
  const seconds = secondsAmount % 60

  return (
    <div>
      <span>{String(minutes).padStart(2 , '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2 , '0')}</span>
    </div>
  );
}

export default App;
