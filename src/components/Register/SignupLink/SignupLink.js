import { Link } from 'react-router-dom';

import './SignupLink.css';

function SignupLink() {
	return (
		<Link to='/signup' className='signup-link'>
			Регистрация
		</Link>
	);
}

export default SignupLink;
