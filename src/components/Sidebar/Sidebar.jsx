import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";

const routes = [
    { title: "Dashboard", icon: "house", path: "/" },
    { title: "Sales", icon: "chart-line", path: "/sales" },
    { title: "Costs", icon: "chart-bar", path: "/costs" },
    { title: "Payments", icon: "wallet", path: "/payments" },
    { title: "Finances", icon: "chart-pie", path: "/finances" },
    { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
    { title: "Settings", icon: "sliders", path: "/settings" },
    { title: "Support", icon: "phone", path: "/support" },
];

const Sidebar = () => {
    const [isOpened, setIsOpened] = useState(true);

    const toggleSidebar = () => {
        setIsOpened((prev) => !prev);
    };

    const goToRoute = (path) => {
        console.log(`Navigating to ${path}`);
    };

    return (
        <div
            className={classnames(styles.sidebar, {
                [styles.opened]: isOpened,
            })}
        >
            <div className={styles.sidebarHeader}>
                <img className={styles.logo} src={logo} alt="Technifly Logo" />
                {isOpened && <span className={styles.logoText}>Tensorflow</span>}
                <button className={styles.toggleButton} onClick={toggleSidebar}>
                    <FontAwesomeIcon
                        icon={isOpened ? "angle-left" : "angle-right"}
                        size="lg"
                    />
                </button>
            </div>

            <div className={styles.menu}>
                {routes.map((route) => (
                    <div
                        key={route.title}
                        className={styles.menuItem}
                        onClick={() => goToRoute(route.path)}
                    >
                        <FontAwesomeIcon icon={route.icon} className={styles.icon} />
                        {isOpened && <span>{route.title}</span>}
                    </div>
                ))}
            </div>

            <div className={styles.bottomMenu}>
                {bottomRoutes.map((route) => (
                    <div
                        key={route.title}
                        className={styles.menuItem}
                        onClick={() => goToRoute(route.path)}
                    >
                        <FontAwesomeIcon icon={route.icon} className={styles.icon} />
                        {isOpened && <span>{route.title}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
