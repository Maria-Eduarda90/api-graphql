import { CharactersType } from '../../@types/Person';
import styles from './styles.module.scss';

export function Card({ characters }: CharactersType){
    
    return(
        <div>
            {characters.results.map((item, key) => {
                return (
                    <>
                        <div key={key}>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div>
                            <h1>{item.name}</h1>
                            <div>
                                <span>{item.status}</span>
                                <p>{item.species}</p>
                            </div>

                            <h2>Origem:</h2>
                            <p>{item.origin.name}</p>

                            <h2>Localização</h2>
                            <p>{item.location.name}</p>
                        </div>
                    </>
                );
            })}
        </div>
    );
}