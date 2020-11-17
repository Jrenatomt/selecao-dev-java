import React, { useEffect, useState } from 'react'
import './styles.scss'
import Card from './Card'
import { MakePrivateRequest } from '../../../core/utils/request';
import { PersonResponse } from '../../../core/utils/person';
import Pagination from '../../../core/components/Pagination';

const Person = () => {

  const [personResponse, setPersonResponse] = useState<PersonResponse>();
    const [activePage, setActivePage] = useState(0);
  
    useEffect(() => {
      const params = {
        page: activePage,
        linesPerPage: 7,
      }
  
      MakePrivateRequest({ url: '/persons', params })
        .then(response => setPersonResponse(response.data))
        .finally(() => {
        })
    }, [activePage]);

    return(
        <div className="admin-list-container">
          {personResponse?.content.map(person => (
            <Card person={person} key={person.id} />
          ))}

           {personResponse && (
        <Pagination 
          totalPages={personResponse.totalPages}
          activePage={activePage}
          onChange={page => setActivePage(page)}
        />
      )}

        </div>
    )
}

export default Person;