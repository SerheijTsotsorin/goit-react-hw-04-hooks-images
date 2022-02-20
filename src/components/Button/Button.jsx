import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ onLoadMore }) {
  return (
    <button className="Button" type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
