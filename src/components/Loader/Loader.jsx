import { TailSpin } from 'react-loader-spinner';
import './Loader.css';

export default function Loader() {
  return (
    <div className="Loader">
      <TailSpin
        ariaLabel="loading-indicator"
        color="#0087b4"
        height={100}
        width={100}
      />
    </div>
  );
}
