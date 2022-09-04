import Contact from './Contact';
import QuickLinks from './QuickLinks';

import styles from './Footer.module.css';

const Footer = props => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-inner']}>
                <div className={`o-container ${styles['o-container']}`}>
                    <div className={styles['o-grid__collapse']}>
                        <Contact />
                        <QuickLinks />
                        <div className={styles.disclosure}>
                            <p>This is a demo creation of a team member page</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;