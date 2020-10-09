import { createStore } from 'redux';
import cars from './cars';

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