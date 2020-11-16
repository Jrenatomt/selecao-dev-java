import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.scss'

type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
      };

    return (
        <div className="login-container col-4 offset-4">
            <h1 className="auth-card-title">
                LOGIN
        </h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)} >
                <input type="email"
                    className="form-control card-base form-email"
                    placeholder="Email"
                    name="email" 
                    ref={register}
                />

                <input type="password"
                    className="form-control card-base form-password"
                    placeholder="Senha"
                    name="password" 
                    ref={register}
                />

               
                <div className="login-submit">
                    <button className="btn btn-primary btn-logar">
                        LOGAR
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Login;