const Counter = ({counter,setCounter}) => {

  function counterUp(){
    setCounter(counter+1)
  }

  return(
    <div>
      <button onClick={counterUp}>up</button>
    </div>
  )
}

export default Counter