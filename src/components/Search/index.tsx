import styles from './styles.module.scss';

export function Search(){
    return(
        <input
         type="search"
         className={styles.search} 
         placeholder="Pesquise por um personagem"
        />
    );
}