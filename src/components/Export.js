import { useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';

const Export = () => {
  const csvData = useSelector((state) => state.csvData.array);

  return (
    <button className="csv-button" type="button">
      <CSVLink
        data={csvData}
        filename="fake-data-generator.csv"
      >
        Export
      </CSVLink>
    </button>
  );
};

export default Export;
