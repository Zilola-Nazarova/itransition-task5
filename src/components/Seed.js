import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setSeed, randomSeed } from '../redux/settings/seedSlice';

const Seed = () => {
  const seed = useSelector((state) => state.seed.value);
  const region = useSelector((state) => state.region.value);
  const dispatch = useDispatch();
  const applySeed = (e) => (e
    ? dispatch(setSeed({ seed: Number(e.target.value), region }))
    : dispatch(randomSeed(region))
  );
  useEffect(() => {
    dispatch(setSeed({ seed, region }));
  }, [region]);

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
          onChange={applySeed}
        />
        <Button
          onClick={() => applySeed()}
        >
          Random
        </Button>
      </label>
    </>
  );
};

export default Seed;
