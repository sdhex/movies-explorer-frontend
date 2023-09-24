import { Link } from 'react-router-dom';

import LogoImage from '../../images/logo.svg';
import './Logo.css';

function Logo() {
	return (
		<Link to='/' className='logo' aria-label='Главная'>
			<div className='logo__img'>
				<img src={LogoImage} alt='Logo' draggable='false' />
			</div>
		</Link>
	);
}

export default Logo;
