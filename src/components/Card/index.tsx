import { PersonType } from '../../@types/Person';
import styles from './styles.module.scss';

export function Card({ characters }: PersonType){
    return(
        <div>
            <div>
                <img src={characters.results.image} alt={characters.results.name} />
            </div>
            <div>
                <h1>{characters.results.name}</h1>
                <div>
                    <span>{characters.results.status}</span>
                    <p>{characters.results.species}</p>
                </div>

                <h2>Origem:</h2>
                <p>{characters.results.origin.name}</p>
                
                <h2>Localização</h2>
                <p>{characters.results.location.name}</p>
            </div>
        </div>
    );
}