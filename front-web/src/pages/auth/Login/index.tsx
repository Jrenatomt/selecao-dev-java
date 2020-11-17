import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { saveSessionData } from '../../../core/utils/auth';
import { MakeLogin } from '../../../core/utils/request';
import './styles.scss'

type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit, errors } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormData) => {
        MakeLogin(data)
        .then(response => {
            setHasError(false);
            saveSessionData(response.data);
            history.push('/admin/persons');
        })
        .catch( () => {
            setHasError(true);
        })
    }

    return (
        <div className="login-container col-4 offset-4">
            <h1 className="auth-card-title">
                LOGIN
        </h1>
        {hasError && (<div className="alert alert-danger mt-5 erro-title">
                usuário ou senha inválido
            </div>)}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-bottom-30">
                    <input type="email"
                        className={`form-control input-base ${errors.username ? 'is-invalid' : '' }`}
                        placeholder="Email"
                        name="username"
                        ref={register({
                            required: "Campo obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                    />
                    {errors.username && (<div className="invalid-feedback d-block erro-title">
                        {errors.username.message}
                    </div>)}
                </div>

                <div>
                    <input type="password"
                        className={`form-control input-base ${errors.password ? 'is-invalid' : '' }`}
                        placeholder="Senha"
                        name="password"
                        ref={register({ required: "Campo obrigatório" })}
                    />
                    {errors.password && (<div className="invalid-feedback d-block erro-title">
                        {errors.password.message}
                    </div>)}
                </div>
               
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