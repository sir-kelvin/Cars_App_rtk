import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  cars: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addCar: (state, action) => {
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    deleteCar: (state, action) => {
      const updatedCars = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updatedCars;
    },
  },
});

export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
