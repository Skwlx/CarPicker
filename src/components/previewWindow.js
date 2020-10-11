import React, { useEffect, useState } from 'react';
import store from "../store/configureStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

import "../styles/previewWindow.scss";

const PreviewWindow = () => {

    const [currentData, setCurrentData] = useState({}); // Current data from global state
    
    // Data that will be used to display information to the user
    const [carType, setCarType] = useState([]);
    const [engineType, setEngineType] = useState([])
    const [gearBoxType, setGearBoxType] = useState([])
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState({});

    useEffect(() =>{
        const render = () => {setCurrentData(store.getState())}
        store.subscribe(render);
        if(currentData.content !== undefined){
            // Price will be set to 0 if the data won't be delivered
            let typePrice = currentData.content.typeName.price || 0;
            let enginePrice = currentData.content.engineName.price || 0;
            let gearBoxPrice = currentData.content.gearBoxName.price || 0;
            setCarType(currentData.content.typeName.type);
            setEngineType(currentData.content.engineName.engine);
            setGearBoxType(currentData.content.gearBoxName.type);
            setPrice(typePrice + enginePrice + gearBoxPrice);
            setColor(currentData.content.color);    
        }
    },[currentData])

    return(
        <div className="previewWindow">
            <div className="previewWindow-car">
                <FontAwesomeIcon className="previewWindow-carIcon" style={{color: color.hexVal}} icon={faCar} />
            </div>
        <ul className="previewWindow-carData">
            <li><h2>Summary: </h2></li>
            <li><h3>Model: </h3>{ carType === undefined ? "---" :  carType}</li>
            <li><h3>Engine: </h3>{ engineType === undefined ? "---" : engineType}</li>
            <li><h3>GearBox: </h3>{ gearBoxType === undefined ? "---" : gearBoxType}</li>
            <li><h3>Color: </h3>{color.name === undefined ? "---" : color.name}</li>
            <li><h3>Price: </h3>{price} $</li>
        </ul>
        </div>
    )
}

export default PreviewWindow;