
import AddTeam from './AddTeam';
import Modal from "../../UI/Modal";

import styles from './AddSection.module.css';

const AddSection = props => {
    return (
        <Modal className={styles['add-section']} onClose={props.onClose}>
            <div className={styles['add-section-container']}>
                <div className={styles['add-section-header']}>
                    <h2>Add a new section</h2>
                    <p>What type of content do you want to add?</p>
                </div>
                <div className={styles['add-section-body']}>
                    <AddTeam />
                </div>
                <div className={styles['add-section-footer']}>
                    <button onClick={props.onClose} className={styles.cancel}>Cancel</button>
                    <button onClick={props.onClose}>Add</button>
                </div>
            </div>
        </Modal>
    );
};

export default AddSection;