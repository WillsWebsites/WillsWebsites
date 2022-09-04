import styles from './QuickLinks.module.css';

const QuickLinks = props => {
    return (
        <div className={styles['quick-links']}>
            <h4>Quick Access</h4>
            <ul>
                <li>Home</li>
            </ul>
        </div>
    );
};

export default QuickLinks; 