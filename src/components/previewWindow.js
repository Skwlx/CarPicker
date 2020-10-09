import React, { useEffect, useState } from 'react';
import store from "../store/configureStore";


const PreviewWindow = () => {
    const [currentData, setCurrentData] = useState({});
    useEffect(() =>{
        const render = () => {setCurrentData(store.getState())}
        store.subscribe(render);
    })

    return(
        <div>
        <p>{currentData.content === undefined ? "" : currentData.content.typeName.type}</p>
        <p>{currentData.content === undefined ? "" : currentData.content.engineName.engine}</p>
        <p>{currentData.content === undefined ? "" : currentData.content.gearBoxName.type}</p>
        </div>
    )
}


export default PreviewWindow;