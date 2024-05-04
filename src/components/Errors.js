import { useSelector, useDispatch } from 'react-redux';
import { setErrors } from '../redux/settings/errorsSlice';

const Errors = () => {
  const errors = useSelector((state) => state.errors.value);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="errors" className="form-label">
        Errors:
        <input
          type="range"
          className="form-range"
          min="0"
          max="10"
          step="1"
          id="errors"
          value={errors > 10 ? 10 : errors}
          onChange={(e) => {
            dispatch(setErrors(e.target.value));
          }}
        />
        <input
          type="number"
          className="form-control"
          min="0"
          max="1000"
          value={errors}
          onChange={(e) => {
            dispatch(setErrors(e.target.value));
          }}
        />
      </label>
    </>
  );
};

export default Errors;
