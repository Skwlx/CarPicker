import React, { useState, useEffect } from "react";
import store from "../store/configureStore";
import { changeContent } from "../store/actions";

import "../styles/configurationMenu.scss"

const ConfigurationMenu = (props) => {

    // This state is used to store data from the props, so we can display the buttons and user picks
    const [carData, setCarData] = useState([]);

    // This states are used to save the data user picked in order to save them in to the 
    // data const and send it to the global state
    const [carType, setCarType] = useState({});
    const [carEngine, setCarEngine] = useState({});
    const [carGear, setCarGear] = useState("");
    const [color, setCarColor] = useState({})

    // This const will be sent to the global state, so PreviewWindow component
    // will be able to use that data to display information to the user
    const data = {
        typeName: carType,
        engineName: carEngine,
        gearBoxName: carGear,
        color
    }

    useEffect(() => {
        // Every change will be recognized and sent to global state
        store.dispatch(changeContent(data));
    });

    return(
        <div className="configMenu">
        <h2>CAR CONFIG</h2>
            <div className="configMenu-carType">
            <h3 className="configMenu-boxTitle">Car Model </h3>
            {
                props.cars.model.map( car => (
                    <button key={car.id} onClick={() => {
                        setCarType({type: car.name, price: car.price}); // Save the information about clicked car model
                        setCarData( { engine: [...car.engine] }); // Saving all avaliable engines for this car model
                        setCarEngine(""); // Reseting the stored data in order to display a new one
                        setCarGear(""); // Another reset
                    }}>
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
                        setCarEngine({engine: eng.name, price: eng.price}); // Save the information about clicked car model
                        setCarData({ engine: [...carData.engine], gearBox: [...eng.gearbox]}); // Save all avaliable engines and gearboxes
                        // We need to use spread operator for the engines once again, because data will be lost if we won't do that
                        setCarGear(""); // We need to reset the gearBox type
                    }}>
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
                    // Setting only gear data because we don't need to display antything else so we don't use setCarData
                ))
            }
            </div>
            <div className="configMenu-carColor">
            {console.log(data.gearBoxName)}
            {
                carGear !== "" ?
                props.cars.colors.map(color => (
                    <button onClick={() => {setCarColor(color)}} style={{backgroundColor:color.hexVal, borderColor: color.hexVal}}></button>
                    // Setting only color data
                ))
                : ""
                // This buttons will be displayed if the gear will be set
            }
            </div>
        </div>
    )
}

export default ConfigurationMenu;