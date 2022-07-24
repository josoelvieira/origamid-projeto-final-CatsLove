import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estats } from "../../Assets/estatisticas.svg";
import { ReactComponent as EnviarAdd } from "../../Assets/enviar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import { useState } from "react";

const UserHeaderNav = () => {
    const [mobile, stMobile] = useState(null);

    const { userLogout } = useContext(UserContext);
    
    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end exact activeClassName={styles.active}>
                <MinhasFotos />
                {mobile && "Minhas Fotos"}
            </NavLink>
            <NavLink
                to="/conta/estatisticas"
                exact
                activeClassName={styles.active}
            >
                <Estats />
                {mobile && "Minhas estatisticas"}
            </NavLink>
            <NavLink to="/conta/postar" exact activeClassName={styles.active}>
                <EnviarAdd />
                {mobile && "Enviar"}
            </NavLink>
            <button className="stylesBtn" onClick={userLogout}>
                <Sair />
                {mobile && "Sair"}
            </button>
        </nav>
    );
};

export default UserHeaderNav;
