import ButtonBanner from '../buttonBanner/ButtonBanner';
import './Form.scss';
import natural from '/natural.jpeg';
import { useForm } from 'react-hook-form';

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div className="container form-bg">
			<h1>5% off on the first order</h1>
			<div className="row-form">
				<div className="img-container">
					<img src={natural} alt="" />
				</div>

				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
					})}
				>
			<input
      
        type="text"
        {...register("UserName", {
          required: "Поле обязательно для заполнения",
          minLength: {
            value: 3,
            message: "Имя пользователя должно быть не менее 3 символов",
          },
          maxLength: {
            value: 20,
            message: "Имя пользователя должно быть не более 20 символов",
          },
        })}
				placeholder="Name"
      />
      {errors.UserName && (
        <span style={{ color: "white" }}>{errors.UserName.message}</span>
      )}
	
					<input
		placeholder='Phone number'
						type="tel"
						{...register('PhoneNumber', {
							required: 'Поле обязательно для заполнения',
							pattern: {
								value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i,
								message: 'Введите корректный номер телефона',
							},
						})}
					/>
					{errors.PhoneNumber && (
						<span style={{ color: 'white' }}>{errors.PhoneNumber.message}</span>
					)}
				 <input placeholder='Email'
        type="email"
        {...register("Email", {
          required: "Поле обязательно для заполнения",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: "Введите корректный адрес электронной почты",
          },
        })}
      />
      {errors.Email && (
        <span style={{ color: "white" }}>{errors.Email.message}</span>
      )}
					<ButtonBanner className="ButtonBanner" title="Get a discount" />
				</form>
			</div>
		</div>
	);
}
