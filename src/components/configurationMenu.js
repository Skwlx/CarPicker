import React, { useState, useEffect } from "react";
import store from "../store/configureStore";
import { changeContent } from "../store/actions";

import "../styles/configurationMenu.scss"

const ConfigurationMenu = (props) => {
    
    const [carData, setCarData] = useState([]);
    const [carType, setCarType] = useState({});
    const [carEngine, setCarEngine] = useState({});
    const [carGear, setCarGear] = useState({});

    const data = {
        typeName: carType,
        engineName: carEngine,
        gearBoxName: carGear
    }
    useEffect(() => {
        store.dispatch(changeContent(data))
    });

    return(
        <div className="configMenu">
            <div className="configMenu-carType">
                <h3>Car type:</h3>
            {
                props.cars.model.map( car => (
                    <button key={car.id} onClick={() => {
                        setCarType({type: car.name, price: car.price}); 
                        setCarData( { engine: [...car.engine], gearbox: [...car.gearbox]})
                        setCarEngine("");
                        setCarGear("")}}>
                    {car.name}
                    </button>
                ))
            }
            </div>
            <div className="configMenu-carEngine">
            {
                carData.engine === undefined ? " " : carData.engine.map(eng => (
                    <button key={eng.id} onClick={() => {setCarEngine({engine: eng.name, price: eng.price})}}>{eng.name}</button>
                ))
            }
            </div>
            <div className="configMenu-carGearBox">
            {
                carData.gearbox === undefined ? " " : carData.gearbox.map(gear => (
                    <button key={gear.id} onClick={() => {setCarGear(gear)}}>{gear.type}</button>
                ))
            }
            </div>
        </div>
    )
}

export default ConfigurationMenu;