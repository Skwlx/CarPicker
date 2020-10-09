import { createStore } from 'redux';
import cars from './cars';

let carsArr = (state = cars, action) =>{
    return state;
};

const store = createStore(carsArr);

export default store;