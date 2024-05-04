import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setSeed, randomSeed } from '../redux/settings/seedSlice';

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
          value={seed}
          onChange={(e) => dispatch(setSeed(e.target.value))}
        />
        <Button
          onClick={() => dispatch(randomSeed())}
        >
          Random
        </Button>
      </label>
    </>
  );
};

export default Seed;
