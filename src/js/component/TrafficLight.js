import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const TrafficLight = () => {

    // btn bg
    // bg-warning
    // bg-danger
    // bg-secondary
    // bt-success

    const [ redColor, setRedColor] = useState(false);
    const [ yellowColor, setYellowColor] = useState(false);
    const [ greenColor, setGreenColor] = useState(false);

    function handleTrafficLightRed() {
        setRedColor(!redColor)
        setYellowColor(false)
        setGreenColor(false)
    }

    function handleTrafficLightYellow() {
        setYellowColor(!yellowColor)
        setRedColor(false)
        setGreenColor(false)
    }

    function handleTrafficLightGreen() {
        setGreenColor(!greenColor)
        setRedColor(false)
        setYellowColor(false)
    }
    
    const [indiceColor, setIndiceColor] = useState(0)
       
    function changeColor() {
       
       if (indiceColor === 0) {
            handleTrafficLightRed()
            setIndiceColor (indiceColor+1)
       }
       else if (indiceColor === 1){
            handleTrafficLightGreen()
            setIndiceColor (indiceColor+1)

       }else{
            handleTrafficLightYellow()
            setIndiceColor(0)
       }
       console.log(indiceColor)
    }
    
    setInterval(changeColor,5000)

    return(
        <>   
            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" className={"btn " + (redColor ? "btn-danger border border-dark" : "btn-secondary border border-dark")+ " p-5"}  onClick={handleTrafficLightRed} style={{ boxShadow: redColor ? " 0px 0px 100px 1px red" : ""}}>  </button>
                    <button type="button" className={"btn " + (yellowColor ? "btn-warning border border-dark" : "btn-secondary border border-dark") + " p-5"} onClick={handleTrafficLightYellow}  style={{ boxShadow: yellowColor ? " 0px 0px 100px 1px yellow" : ""}} >  </button>
                    <button type="button" className={"btn " + (greenColor ? "btn-success border border-dark" : "btn-secondary border border-dark") + " p-5"} onClick={handleTrafficLightGreen}  style={{ boxShadow: greenColor ? " 0px 0px 100px 1px green" : ""}}>  </button> 
            </div>  

            <br/>
            <br/>

            <div className="d-grid gap-2 col-6 mx-auto">
                <p>{indiceColor}</p>
                <button className="btn btn-secondary" type="button" onClick={changeColor}> Cambiar el color del semáforo</button>
                
            </div>
        </>

    )
}

export default TrafficLight