import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estats } from "../../Assets/estatisticas.svg";
import { ReactComponent as EnviarAdd } from "../../Assets/pussy-cat-cartoon-outline-variant-svgrepo-com.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";
import { useState } from "react";
import { useEffect } from "react";

const UserHeaderNav = () => {
    const mobile = useMedia("(max-width: 40rem");
    const { userLogout } = useContext(UserContext);
    const [mobileMenu, setMobilMenu] = useState(false);

    const { pathname } = useLocation();
    useEffect(() => {
        setMobilMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (
                <button
                    aria-label="menu"
                    onClick={() => setMobilMenu(!mobileMenu)}
                    className={`${styles.mobileButton} ${
                        mobileMenu && styles.mobileButtonActive
                    }`}
                ></button>
            )}

            <nav
                className={`${mobile ? styles.navMobile : styles.nav} ${
                    mobileMenu && styles.navMobileActive
                }`}
            >
                <NavLink
                    to="/conta"
                    end
                    exact="true"
                    activeclassname={styles.active}
                >
                    <MinhasFotos />
                    {mobile && "Fotos"}
                </NavLink>
                <NavLink
                    to="/conta/estatisticas"
                    exact="true"
                    activeclassname={styles.active}
                >
                    <Estats />
                    {mobile && "Estatisticas"}
                </NavLink>
                <NavLink
                    to="/conta/postar"
                    exact="true"
                    activeclassname={styles.active}
                >
                    <EnviarAdd />
                    {mobile && "Add foto"}
                </NavLink>
                <button className={styles.stylesBtn} onClick={userLogout}>
                    <Sair />
                    {mobile && "Sair"}
                </button>
            </nav>
        </>
    );
};

export default UserHeaderNav;
