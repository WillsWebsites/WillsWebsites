
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
                    <div className={`${styles['section-item']} ${styles['section-item-team']}`}>
                        <div className={styles['s-item-team-main']}>
                            <div className={styles['s-team-member']}>
                                <div className={styles['s-member-upper']}>
                                    <div className={styles['s-member--photo']}>
                                        <i className="fa fa-user" aria-hidden="true"></i>   
                                    </div>
                                    <div className={styles['s-member--header']}></div>
                                    <div className={`${styles['s-member--paragraph']} ${styles['s-member--paragraph1']}`}></div>
                                    <div className={`${styles['s-member--paragraph']} ${styles['s-member--paragraph2']}`}></div>
                                    <div className={`${styles['s-member--paragraph']} ${styles['s-member--paragraph3']}`}></div>
                                </div>
                            </div>
                            <div className={styles['s-team-member']}>
                                <div className={styles['s-member-upper']}>
                                    <div className={styles['s-member--photo']}>
                                        <i className="fa fa-user" aria-hidden="true"></i>   
                                    </div>
                                    <div className={styles['s-member--header']}></div>
                                    <div className={`${styles['s-member--paragraph']} ${styles['s-member--paragraph1']}`}></div>
                                    <div className={`${styles['s-member--paragraph']} ${styles['s-member--paragraph2']}`}></div>
                                    <div className={`${styles['s-member--paragraph']} ${styles['s-member--paragraph3']}`}></div>
                                </div>
                            </div>
                            <div className={styles['s-team-member']}>
                                <div className={styles['s-member-upper']}>
                                    <div className={styles['s-member--photo']}>
                                        <i className="fa fa-user" aria-hidden="true"></i>   
                                    </div>
                                    <div className={styles['s-member--header']}></div>
                                    <div className={`${styles['s-member--paragraph']} ${styles['s-member--paragraph1']}`}></div>
                                    <div className={`${styles['s-member--paragraph']} ${styles['s-member--paragraph2']}`}></div>
                                    <div className={`${styles['s-member--paragraph']} ${styles['s-member--paragraph3']}`}></div>
                                </div>
                            </div>
                            <button className={styles['s-member-description']}>
                                Add Section
                            </button>
                        </div>
                        <div className={styles['s-member-lower']}>
                            <h4>Team Members</h4>
                        </div>
                    </div>
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