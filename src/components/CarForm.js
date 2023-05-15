import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';
function CarForm() {
  const { name, cost } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  /** event handler **/
  const handleChangeName = (e) => {
    const { value } = e.target;
    dispatch(changeName(value));
  };

  const handleChangeCost = (e) => {
    const { value } = e.target;
    const cost = parseInt(value || 0);
    dispatch(changeCost(cost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };
  /** end of  event handler **/

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ''}
              onChange={handleChangeCost}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
