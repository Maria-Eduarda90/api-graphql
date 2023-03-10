import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type SearchType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    value?: string;
    onChange?: (value: any) => void;
}

export function Search(props: SearchType){
    return(
        <input
         type="search"
         className={styles.search} 
         placeholder="Pesquise por um personagem"
         {...props}
        />
    );
}