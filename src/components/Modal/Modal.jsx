import { useEffect } from 'react';

import PropTypes from 'prop-types';
import './Modal.css';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handleClickBackDrop = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleClickBackDrop}>
      <div className="Modal">{children}</div>
    </div>
  );
}

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = evt => {
//     if (evt.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleClickBackDrop = evt => {
//     if (evt.currentTarget === evt.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <div className="Overlay" onClick={this.handleClickBackDrop}>
//         <div className="Modal">{this.props.children}</div>
//       </div>
//     );
//   }
// }

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
