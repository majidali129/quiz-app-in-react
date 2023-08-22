import { useEffect } from "react";

export default function Timer({dispatch, remainingSeconds}) {

    let mins =Math.floor( remainingSeconds / 60);
    let secs = remainingSeconds % 60;

    useEffect(()=>{
        const id = setInterval(()=>{
            dispatch({type: 'TICK'})
        },1000)

        return ()=>clearInterval(id)
    },[dispatch])
    return (
        <div className="primary--btn">
          {mins < 10 && "0"}
          {mins}:{secs < 10 && "0"}
          {secs}
        </div>
      );
}
