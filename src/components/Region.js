import { allFakers } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../redux/settings/regionSlice';

const Region = () => {
  const region = useSelector((state) => state.region.value);
  const dispatch = useDispatch();
  const locales = Object.keys(allFakers).map((key) => {
    try {
      allFakers[key].person.fullName();
    } catch (e) {
      console.log(`In locale ${key}, an error occurred: ${e}`);
    }
    return key;
  });
  useEffect(() => {
    console.log(`Now region is ${region}`);
  }, [region]);

  return (
    <>
      <label htmlFor="regions" className="form-label">
        Choose the region
        <select
          className="form-select"
          aria-label="Region"
          id="regions"
          onChange={(e) => dispatch(select(e.target.value))}
          value={region}
        >
          {locales.map((location) => (
            <option key={uuidv4()} value={location}>{location}</option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Region;
