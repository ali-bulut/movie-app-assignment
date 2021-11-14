import { Button } from 'react-bootstrap';
import Texts from '../../../constants/Texts';

const FilterButton = () => {
  return (
    <Button variant="primary" className="filter-button">
      {Texts.search}
    </Button>
  );
};

export default FilterButton;
