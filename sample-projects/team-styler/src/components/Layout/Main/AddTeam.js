import { useState } from 'react';

import styles from './AddTeam.module.css';

const AddTeam = props => {
    const [sectionItemActive, setSectionItemActive] = useState(false);

    const sectionItemHandler = () => {
        setSectionItemActive(prevItem => !prevItem);
    };


    return (
        <button className={`${styles['section-item']} ${sectionItemActive ? styles['section-item--active'] : ''}`} onClick={sectionItemHandler}>
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
                <div className={styles['s-member-description']}>
                    {/* {sectionItemActive && <div className={`${styles['s-add-toggle']} ${styles['s-add-toggle--active']}`} />} */}
                    <div className={styles['s-add-toggle']} />
                    <p>Add Section</p>
                </div>
            </div>
            <div className={styles['s-member-lower']}>
                <h4>Team Members</h4>
            </div>
        </button>
    );
};

export default AddTeam;