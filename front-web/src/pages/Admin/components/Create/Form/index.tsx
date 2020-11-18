import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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

type paramsType = {
    personId: string;
}

const Form = () => {
    const { register, handleSubmit, errors, setValue } = useForm<FormState>();
    const history = useHistory();
    const { personId } = useParams<paramsType>();
    const isEditing = personId;
    const formTitle = isEditing ? 'EDITAR PESSOA' : "CADASTRAR UMA PESSOA";

    useEffect(() => {
        if (isEditing) {
            MakePrivateRequest({ url: `/persons/${personId}` })
            .then(response => {
              setValue('name', response.data.name);
              setValue('gender', response.data.gender);
              setValue('email', response.data.email);
              setValue('birthDate', response.data.birthDate);
              setValue('city', response.data.city);
              setValue('coutry', response.data.coutry);
              setValue('cpf', response.data.cpf);
            })
        }
     }, [personId,isEditing,setValue]);

    const onSubmit = (data: FormState) => {
        MakePrivateRequest({ 
            url: isEditing ? `/persons/${personId}` : '/persons' , 
            method: isEditing ? 'PUT' : 'POST', 
            data: data
        })
        .then(() => {
            toast.info('dados salvo com sucesso')
            history.push('/admin/persons')
        })
        .catch((error) => {
            if (error.response.status === 422){
                toast.error('email ou cpf já Cadastrados')  
            }   
            toast.error('erro ao cadastrar, tente novamente')        
        })
    }
       
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title={formTitle}>
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
                            <input
                                name="gender"
                                ref={register}
                                type="text"
                                className="form-control input-base"
                                placeholder="Sexo"
                            />
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