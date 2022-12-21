import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { PersonType } from '../../@types/Person';
import { INFO_PERSON } from '../../graphql';
import { Search } from '../Search';
import styles from './styles.module.scss';

export function Card(){
    const { data } = useQuery(INFO_PERSON);
    const [search, setSearch] = useState('');

    const filterBlog = data.characters.results.filter((data) => data.name.toLowerCase().indexOf(search) !== -1);

    return (
        <>
        <div className={styles.container_search}>
            <Search
                onChange={e => setSearch(e.target.value)}
                value={search}
            />
        </div>
        <div className={styles.card}>
            {filterBlog.map((item, key) =>
                <div className={styles.container} key={key}>
                    <div className={styles.image}>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className={styles.description}>
                        <h1>{item.name}</h1>
                        <div className={styles.status} id="status">
                            <span>{item.status}</span> -
                            <p>{item.species}</p>
                        </div>

                        <div className={styles.OriginLocation}>
                            <h2>Origem:</h2>
                            <p>{item.origin.name}</p>

                            <h2>Localização:</h2>
                            <p>{item.location.name}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}