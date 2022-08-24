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
                            <p>The content is developed from sources believed to be providing accurate information. The information in this material is not intended as tax or legal advice. Please consult legal or tax professionalsfor specific information regarding your individual situation. Some of this material was developed and produced byFMG Suite to provide information on a topic that may be of interest. FMG Suite is not affiliated with the namedrepresentative, broker - dealer, state - or SEC - registered investment advisory firm. The opinions expressed andmaterial provided are for general information, and should not be considered a solicitation for the purchase orsale of any security.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;