import styles from './Navigation.module.css';

const Navigation = props => {
    return (
        <nav>
            <ul className={styles.nav}>
                <li>Marketing Calendar</li>
                <li>Inbox</li>
                <li>Draft <span className={styles.draft}>5</span></li>
                <li>Compliance <span className={styles.compliance}>26</span></li>
                <li>User</li>
            </ul>
        </nav>
    );
};

export default Navigation;