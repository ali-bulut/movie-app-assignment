import { Spinner } from 'react-bootstrap';

const CustomSpinner = () => {
  return (
    <div className="align-items mb-4">
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default CustomSpinner;
