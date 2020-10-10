import React, { useState, useEffect } from "react";
import store from "../store/configureStore";
import { changeContent } from "../store/actions";

import "../styles/configurationMenu.scss"

const ConfigurationMenu = (props) => {
    
    const [carData, setCarData] = useState([]);
    const [carType, setCarType] = useState({});
    const [carEngine, setCarEngine] = useState({});
    const [carGear, setCarGear] = useState({});
    const [color, setCarColor] = useState({})

    const data = {
        typeName: carType,
        engineName: carEngine,
        gearBoxName: carGear,
        color
    }
    useEffect(() => {
        store.dispatch(changeContent(data))
    });

    return(
        <div className="configMenu">
        <h2>CAR CONFIG</h2>
            <div className="configMenu-carType">
            <h3 className="configMenu-boxTitle">Car Model </h3>
            {
                props.cars.model.map( car => (
                    <button key={car.id} onClick={() => {
                        setCarType({type: car.name, price: car.price}); 
                        setCarData( { engine: [...car.engine] });
                        setCarEngine("");
                        setCarGear("")}}>
                    {car.name}
                    </button>
                ))
            }
            </div>
            <div className="configMenu-carEngine">
            {carData.engine === undefined ? "" : <h3 className="configMenu-boxTitle">Engine</h3>}
            {
                carData.engine === undefined ? " " : carData.engine.map(eng => (
                    <button key={eng.id} onClick={() => {
                        setCarEngine({engine: eng.name, price: eng.price})
                        setCarData({ engine: [...carData.engine], gearBox: [...eng.gearbox]})}}>
                        {eng.name}
                        </button>
                ))
            }
            </div>
            <div className="configMenu-carGearBox">
            {carData.gearBox === undefined ? "" : <h3 className="configMenu-boxTitle">GearBox</h3>}
            {
                carData.gearBox === undefined ? " " : carData.gearBox.map(gear => (
                    <button key={gear.id} onClick={() => {setCarGear(gear)}}>{gear.type}</button>
                ))
            }
            </div>
            {console.log(carGear)}
            <div className="configMenu-carColor">
            {
                props.cars.colors.map(color => (
                    <button onClick={() => {setCarColor(color)}} style={{backgroundColor:color.hexVal, borderColor: color.hexVal}}></button>
                ))
            }
            </div>
        </div>
    )
}

export default ConfigurationMenu;