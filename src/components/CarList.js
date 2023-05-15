import React from 'react';
import { deleteCar } from '../store';
import { useSelector, useDispatch } from 'react-redux';

const CarList = () => {
  const dispatch = useDispatch();
  const { cars: data, name } = useSelector(
    ({ form, cars: { cars, searchTerm } }) => {
      const filteredCars = cars.filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      return {
        cars: filteredCars,
        name: form.name,
      };
    }
  );

  const handleDelete = (car) => {
    dispatch(deleteCar(car));
  };

  const renderedCars = data.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleDelete(car.id)}
        >
          remove car
        </button>
      </div>
    );
  });
  return (
    <>
      <div className="car-list">{renderedCars}</div>
      <hr />
    </>
  );
};

export default CarList;
