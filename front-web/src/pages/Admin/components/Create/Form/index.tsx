import React from 'react'
import { useForm } from 'react-hook-form';
import { MakePrivateRequest } from '../../../../../core/utils/request';
import BaseForm from '../../../BaseForm';
import './styles.scss'

type FormState = {
    name: string;
    gender: string;
    email: string;
    birthDate: string;
    city: string;
    coutry: string;
    cpf: string;
}

const Form = () => {
    const { register, handleSubmit, errors } = useForm<FormState>();

    const onSubmit = (data: FormState) => {
        MakePrivateRequest({ url: '/persons', method: 'POST', data })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title="cadastrar uma Passoa">
                <div className="row">
                    <div className="col-8">
                        <div className="mb-4 mt-4">
                            <input
                                name="name"
                                ref={register({ required: "Campo obrigatório" })}
                                type="text"
                                className="form-control input-base"
                                placeholder="Nome"
                            />
                        
                        {errors.name && (<div className="invalid-feedback d-block erro-title">
                            {errors.name.message}
                        </div>)}
                        </div>

                        <div className="mb-4">
                            <select name="gender"
                                ref={register}
                                className="form-control input-base" >
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <input
                                name="email"
                                ref={register({
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Email inválido"
                                    }
                                })}
                                type="email"
                                className="form-control input-base"
                                placeholder="Email"
                            />
                        </div>

                        <div className="mb-4">
                        <input
                            name="birthDate"
                            ref={register({ required: "Campo obrigatório" })}
                            type="date"
                            className="form-control input-base"
                            placeholder="Data de Nascimento"
                        />
                         {errors.birthDate && (<div className="invalid-feedback d-block erro-title">
                            {errors.birthDate.message}
                        </div>)}
                        </div>

                        <div className="mb-4">
                            <input
                                name="city"
                                ref={register}
                                type="text"
                                className="form-control input-base"
                                placeholder="Naturalidade"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                name="coutry"
                                ref={register}
                                type="text"
                                className="form-control  input-base"
                                placeholder="Nacionalidade"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                name="cpf"
                                ref={register({
                                    required: "Campo obrigatório",
                                    pattern: {
                                        value: /^(\d{3}.?\d{3}.?\d{3}-?\d{2})/i,
                                        message: "CPF inválido"
                                    }
                                })}
                                type="text"
                                className="form-control input-base"
                                placeholder="CPF"
                            />                       
                        {errors.cpf && (<div className="invalid-feedback d-block erro-title">
                            {errors.cpf.message}
                        </div>)}
                        </div>
                    </div>

                </div>


            </BaseForm>
        </form>
    )

}

export default Form;