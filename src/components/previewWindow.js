import React, { useEffect, useState } from 'react';
import store from "../store/configureStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

import "../styles/previewWindow.scss";

const PreviewWindow = () => {
    const [currentData, setCurrentData] = useState({});
    const [carType, setCarType] = useState([]);
    const [engineType, setEngineType] = useState([])
    const [gearBoxType, setGearBoxType] = useState([])
    const [price, setPrice] = useState(0);

    useEffect(() =>{
        const render = () => {setCurrentData(store.getState())}
        store.subscribe(render);
        if(currentData.content !== undefined){
            let typePrice = currentData.content.typeName.price || 0;
            let enginePrice = currentData.content.engineName.price || 0;
            let gearBoxPrice = currentData.content.gearBoxName.price || 0;
            setCarType(currentData.content.typeName.type);
            setEngineType(currentData.content.engineName.engine);
            setGearBoxType(currentData.content.gearBoxName.type);
            setPrice(typePrice + enginePrice + gearBoxPrice);
        }
    },[currentData])

    return(
        <div className="previewWindow">
            <div className="previewWindow-car">
                <FontAwesomeIcon className="previewWindow-carIcon" icon={faCar} />
            </div>
        <ul className="previewWindow-carData">
            <li>{carType}</li>
            <li>{engineType}</li>
            <li>{gearBoxType}</li>
            <li>{price}$</li>
        </ul>
        </div>
    )
}

export default PreviewWindow;