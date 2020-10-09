import React, { useState } from "react";
import store from "../store/configureStore";
import { changeContent } from "../store/actions";

const ConfigurationMenu = (props) => {
    
    const [carData, setCarData] = useState([]);
    const [carType, setCarType] = useState({});
    const [carEngine, setCarEngine] = useState({});
    const [carGear, setCarGear] = useState({});

    const data = {
        type: carType,
        engine: carEngine,
        gearBox: carGear
    }

    return(
        <div className="confMenu">
            {
                props.cars.model.map( car => (
                    <button key={car.id} onClick={() => {setCarType({type: car.name, price: car.price}); setCarData( { engine: [...car.engine], gearbox: [...car.gearbox]})}}>{car.name}</button>
                ))
            }
            <div>
            {
                carData.engine === undefined ? " " : carData.engine.map(eng => (
                    <button key={eng.id} onClick={() => {setCarEngine({engine: eng.name, price: eng.price})}}>{eng.name}</button>
                ))
            }
            {
                carData.gearbox === undefined ? " " : carData.gearbox.map(gear => (
                    <button onClick={() => {setCarGear(gear); store.dispatch(changeContent(data))}}>{gear}</button>
                ))
            }
            </div>
        </div>
    )
}

export default ConfigurationMenu;