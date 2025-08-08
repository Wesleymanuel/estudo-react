import Links from './Links';
import './Tudo.css';
function Tudo({logo}) {

    return(
        <div className='conteiner'>
            <h1>{logo}</h1>
            <Links/>
        </div>
    )
}
export default Tudo;