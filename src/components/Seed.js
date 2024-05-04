import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { set, random } from '../redux/settings/seedSlice';

const Seed = () => {
  const seed = useSelector((state) => state.seed.value);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="seed" className="form-label">
        <input
          type="number"
          placeholder="Seed"
          className="form-control"
          aria-label="Enter Seed"
          id="seed"
          onChange={(e) => dispatch(set(e.target.value))}
        />
        <Button
          onClick={() => dispatch(random())}
        >
          Random
        </Button>
      </label>
    </>
  );
};

export default Seed;
