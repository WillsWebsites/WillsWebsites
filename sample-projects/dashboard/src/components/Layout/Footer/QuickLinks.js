import styles from './QuickLinks.module.css';

const QuickLinks = props => {
    return (
        <div className={styles['quick-links']}>
            <h4>Quick Links</h4>
            <ul>
                <li>Resource Center</li>
            </ul>
        </div>
    );
};

export default QuickLinks;