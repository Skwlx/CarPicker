import React, { useState } from "react";

const ConfigurationMenu = (props) => {
    
    const [carInfo, setCarInfo] = useState([]);

    return(
        <div className="confMenu">
            {
                props.cars.model.map( car => (
                    <button key={car.id} onClick={() => { setCarInfo( { engine: [...car.engine], gearbox: [...car.gearbox]})}}>{car.name}</button>
                ))
            }
            <div>
            {
                carInfo.engine === undefined ? " " : carInfo.engine.map(eng => (
                    <button key={eng.id}>{eng.name} {console.log(eng.id)}</button>
                ))
            }
            {
                carInfo.gearbox === undefined ? " " : carInfo.gearbox.map(gear => (
                    <button>{gear}</button>
                ))
            }
            </div>
        </div>
    )
}

export default ConfigurationMenu;


