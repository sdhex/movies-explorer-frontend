import { useEffect } from 'react';
import './Overlay.css';

export default function Overlay({ onClick }) {
  useEffect(() => {}, []);

  return <div className="overlay" onClick={onClick}></div>;
}
