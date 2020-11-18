import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify'
import { Person } from '../../../../core/utils/person'
import { MakePrivateRequest } from '../../../../core/utils/request'
import './styles.scss'

type Props = {
    person: Person;
}

const Card = ({person}: Props) => { 
    
    const history = useHistory();
    
    const deletePerson = () => {
        MakePrivateRequest({ url:`/persons/${person.id}`, method: 'DELETE'})
        .then(() => {
            toast.info('pessoa deletada com sucesso')
            history.push('/admin/cadastrar')
        })
        .catch(() => {
            toast.error('erro ao deletar, tente novamente')  
        })
    }

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
                        onClick={deletePerson}
                        className="btn btn-outline-danger btn-admin border-radios-10">
                        EXCLUIR
                </button>
             </div>
           </div>
       </div>
    )
}
export default Card;