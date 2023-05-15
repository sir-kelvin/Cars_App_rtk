import { configureStore } from '@reduxjs/toolkit';
import { formReducer, changeCost, changeName } from './slices/formSlice';
import {
  addCar,
  deleteCar,
  changeSearchTerm,
  carsReducer,
} from './slices/carsSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, changeCost, changeName, addCar, deleteCar, changeSearchTerm };
