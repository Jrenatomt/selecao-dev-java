import React from 'react'
import { Link } from 'react-router-dom'
import { Person } from '../../../../core/utils/person'
import './styles.scss'


type Props = {
    person: Person;
}
const Card = ({person}: Props) => {  

    return(
       <div className="card-base person-card-admin">
           <div className="row">
             <div className="col-6">
                 <h2 className="person-name-admin">
                      {person.name}
                 </h2>
                 <h4 className="person-email-admin">
                     {person.email}
                 </h4>

             </div>

             <div className="col-3 btn-editar">
                <Link to={`/admin/persons/${person.id}`} type="button" 
                        className="btn btn-outline-secondary btn-admin border-radios-10">
                        EDITAR
                </Link>
             </div>

             <div className="col-3 btn-excluir ">
                 <button type="button"
                        className="btn btn-outline-danger btn-admin border-radios-10">
                        EXCLUIR
                </button>
             </div>
           </div>
       </div>
    )
}
export default Card;