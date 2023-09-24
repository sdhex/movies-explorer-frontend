import { useForm } from '../../hooks/useForm';
import AuthScreen from '../AuthScreen/AuthScreen';
import '../AuthScreen/AuthScreen.css';

function Login() {
	const { values, handleChange } = useForm();

	return (
		<main className='login'>
			<AuthScreen
				title='Рады видеть!'
				name='login'
			>
				<label className='form__input-wrapper'>
					E-mail
					<input
						className='form__input'
						type='text'
						name='email'
						form='register'
						required
						id='email-input'
						onChange={handleChange}
						value={values.email || ''}
					/>
					<span className={`form__input-error`}></span>
				</label>
				<label className='form__input-wrapper'>
					Пароль
					<input
						className='form__input'
						type='password'
						name='password'
						form='register'
						required
						id='password-input'
						onChange={handleChange}
						value={values.password || ''}
					/>
				</label>
				<button className='form__button' type='submit'>
					Войти
				</button>
			</AuthScreen>
		</main>
	);
}

export default Login;
