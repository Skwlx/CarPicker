import { createStore } from 'redux';
import cars from './cars';

// Configuring the store and one dispatch action

let carsArr = (state = cars, action) =>{
    switch(action.type){
        case "CHANGE_CARS_DATA":
        return ({
            ...state,
            content: action.data
        })
        default:    
        return state;
    }
};

const store = createStore(carsArr);

export default store;