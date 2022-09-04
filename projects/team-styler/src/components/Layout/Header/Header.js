import Navigation from './Navigation';

import styles from './Header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles['header-inner']}>
                <div className={styles['logo-container']}>
                    <h1>Team Styler</h1>
                    <p style={{color: '#9b9898', fontSize: '18px', marginBottom: '15px'}}>Practice</p>
                </div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header; 