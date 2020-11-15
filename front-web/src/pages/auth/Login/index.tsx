import React from 'react';
import './styles.scss'

const Login = () => {
    return (
        <div className="login-container col-4 offset-4">
            <h1 className="auth-card-title">
                LOGIN
        </h1>
        <form className="login-form">
                <input type="email"
                    className="form-control card-base form-email"
                    placeholder="Email"
                />

                <input type="password"
                    className="form-control card-base form-password"
                    placeholder="Senha"
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