import styles from './Perfil.module.css';

const Perfil = ({nomeDoUsuario}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeDoUsuario}.png`} />
            <h1 className={styles.name}>{nomeDoUsuario}</h1>
        </header>
    )
}

export default Perfil
// Ao invés de usar o export default no fim da linha
// podemos também utilizar ela no começo, com uma arrow function ou uma function