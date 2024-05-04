import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegion } from '../redux/settings/regionSlice';
import { generateRegions } from '../helpers/faker';

const Region = () => {
  const region = useSelector((state) => state.region.value);
  const dispatch = useDispatch();
  const regions = generateRegions();

  return (
    <>
      <label htmlFor="regions" className="form-label">
        Choose the region
        <select
          className="form-select"
          aria-label="Region"
          id="regions"
          onChange={(e) => dispatch(selectRegion(e.target.value))}
          value={region}
        >
          {regions.map((obj) => (
            <option key={uuidv4()} value={obj.code}>
              {`${obj.name} (${obj.code})`}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Region;
