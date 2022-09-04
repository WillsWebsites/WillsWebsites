import styles from './Navigation.module.css';

const Navigation = props => {
    return (
        <nav>
            <ul className={styles.nav}>
                <li>Calendar</li>
                <li>Inbox</li>
                <li>Team Members</li>
                <li>Account Access</li>
            </ul>
        </nav>
    );
};

export default Navigation;