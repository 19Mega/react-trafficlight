import React ,{useState} from "react";

const TrafficLight = () => {

    // btn bg
    // bg-warning
    // bg-danger
    // bg-secondary
    // bt-success

    const [ redColor, setRedColor] = useState(true);
    const [ yellowColor, setYellowColor] = useState(false);
    const [ greenColor, setGreenColor] = useState(false);


    function handleTrafficLightGreen() {
        setGreenColor(!greenColor)
        setRedColor(false)
        setYellowColor(false)
    }

    function handleTrafficLightYellow() {
        setYellowColor(!yellowColor)
        setRedColor(false)
        setGreenColor(false)
    }

    function handleTrafficLightRed() {
        setRedColor(!redColor)
        setYellowColor(false)
        setGreenColor(false)
    }

    console.log(redColor)

    return(
        <>   
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" className={"btn " + (redColor ? "btn-danger border border-dark" : "btn-secondaryg border border-dark")+ " p-5"} onClick={handleTrafficLightRed}>  </button>
                    <button type="button" className={"btn " + (yellowColor ? "btn-warning border border-dark" : "btn-secondary border border-dark") + " p-5"} onClick={handleTrafficLightYellow}>  </button>
                    <button type="button" className={"btn " + (greenColor ? "btn-success border border-dark" : "btn-secondary border border-dark") + " p-5"} onClick={handleTrafficLightGreen}>  </button> 
            </div>  
        </>

    )
}

export default TrafficLight