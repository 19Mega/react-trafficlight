import React from "react";
import TrafficLight from "./TrafficLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		
		<div className="container ">
			<div className="text-center">
				<p className="text-center m-5 p-3 bg-warning fs-3">Despacio! Semáforo</p>
				<br/>

				<TrafficLight/>

			</div>
		</div>
	);
};

export default Home;
