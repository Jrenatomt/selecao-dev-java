import React, { useState } from 'react';
import UserCard from './components/UserCard';
import './styles.scss';
import { Person } from '../../core/utils/person';
import Button from '../../core/components/Button';
import { MakePrivateRequest } from '../../core/utils/request';
import { toast } from 'react-toastify';

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<Person>();
    

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        MakePrivateRequest({url:`/persons/name/${search}`, method:'GET'})
            .then(response => setUserData(response.data))
            .catch((error) => {
                if (error.response.status === 404){
                    toast.error('pessoa não encontrada')  
                }
            });
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <div className="search-content card-base">
                    <h1 className="search-text-title">CONSULTA DE PESSOA PELO NOME</h1>
                    <input
                        value={search}
                        type="text"
                        className="search-input"
                        onChange={handleOnChange}
                        placeholder="pesquisar"
                    />
                    <Button text="Buscar" />
                </div>
            </form>
            {!userData? <></> : <UserCard person={userData} />}
        </div >
    );
};

export default Search;