import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/logo.svg";
import { UserContext } from "../UserContext";

const Header = () => {
    const { data, userLogout } = useContext(UserContext);
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link
                    className={styles.logo}
                    to="/"
                    aria-label="Cats Love - Home"
                >
                    <Dogs />
                </Link>
                {data ? (
                    <Link className={styles.login} to="/conta">
                        {data.nome}
                        <button onClick={userLogout}>Sair</button>
                    </Link>
                ) : (
                    <Link className={styles.login} to="/login">
                        Login / Criar
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
