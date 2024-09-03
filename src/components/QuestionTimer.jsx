import React, { useState,useEffect } from 'react'

const QuestionTimer = ({onTimeOut,timeOut}) => {

    const [remainingTime,setRemainingTime] = useState(timeOut);

    useEffect(() => {
        const timer = setTimeout(onTimeOut,timeOut);   
        return()=>{
            clearTimeout(timer)
        }
    }, [onTimeOut,timeOut]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => prev - 100)
        }, 100);
        return()=>{
            clearInterval(interval)
        }
    }, []);
    


  return(
    <>
    <progress max={timeOut} value={remainingTime}/>
    <span>{Math.round(remainingTime/1000)}</span>
    </>
    
  ) 
}

export default QuestionTimer