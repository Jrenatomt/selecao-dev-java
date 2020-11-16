import React, { useState } from 'react'
import { MakeRequest } from '../../../../../core/utils/request';
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

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const Form = () => {

    const [formData, setFormData] = useState<FormState>({
        name: '',
        gender: '',
        email: '',
        birthDate: '',
        city: '',
        coutry: '',
        cpf: '',
    });


    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            ...formData
        }

        MakeRequest({ url: '/persons', method: 'POST', data: payload })
        .then(() => {
            setFormData({ name: '', gender: '', email: '', birthDate: '', city: '',coutry: '', cpf: '', })
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="cadastrar uma Passoa">
                <div className="row">
                    <div className="col-8">
                        <input
                            name="name"
                            value={formData.name}
                            type="text"
                            className="form-control mb-4 mt-4"
                            onChange={handleOnChange}
                            placeholder="Nome"
                        />
                         <select name="gender" value={formData.gender} className="form-control mb-4" onChange={handleOnChange}>
                            <option value="1">Feminino</option>
                            <option value="2">Masculino</option>
                        </select>

                        <input
                            name="email"
                            value={formData.email}
                            type="email"
                            className="form-control mb-4"
                            onChange={handleOnChange}
                            placeholder="Email"
                        />

                        <input
                            name="birthDate"
                            value={formData.birthDate}
                            type="date"
                            className="form-control mb-4"
                            onChange={handleOnChange}
                            placeholder="Data de Nascimento"
                        />

                        <input
                            name="city"
                            value={formData.city}
                            type="text"
                            className="form-control mb-4"
                            onChange={handleOnChange}
                            placeholder="Naturalidade"
                        />

                        <input
                            name="coutry"
                            value={formData.coutry}
                            type="text"
                            className="form-control mb-4"
                            onChange={handleOnChange}
                            placeholder="Nacionalidade"
                        />

                        <input
                            name="cpf"
                            value={formData.cpf}
                            type="text"
                            className="form-control mb-4"
                            onChange={handleOnChange}
                            placeholder="CPF"
                        />
                    </div>

                </div>


            </BaseForm>
        </form>
    )

}

export default Form;