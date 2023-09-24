import { Link } from 'react-router-dom';

import './SigninLink.css';

function SigninLink() {
	return (
		<Link to='/signin' className='signin-link'>
			Войти
		</Link>
	);
}

export default SigninLink;
