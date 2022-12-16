import styles from './styles.module.scss';

export function Header(){
    return(
        <div className={styles.header}>
            <h1>RICK AND MORTY</h1>

            <div className={styles.wrapper}>
                <img src="https://github.com/Maria-Eduarda90.png" alt="github" />
                <a href="https://github.com/Maria-Eduarda90/api-graphql" target="_blank">
                    <p>By Maria 💚</p>
                </a>
            </div>
        </div>
    );
}