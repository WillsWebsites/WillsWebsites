import { useEffect, useState } from 'react';

import Section from '../Layout/Main/Section';
import TeamFlip from './TeamFlip';

import './Team.css';
import timProfile from '../../photos/tim-profile.jpeg';
import annaProfile from '../../photos/anna-profile.jpeg';
import scottProfile from '../../photos/scott-profile.jpeg';
import clairProfile from '../../photos/clair-profile.jpeg';

import TeamMember from './TeamMember';

const Team = props => {
    const [memberStyle, setMemberStyle] = useState('default');
    const [flipStyle, setFlipStyle] = useState(false);

    const members = [
        {
            name: 'Tim Collins',
            position: 'Owner',
            phone: '(555) 555-5555',
            email: 'tim@mail.com',
            profileImage: timProfile
        },
        {
            name: 'Anna Smith',
            position: 'Financial Advisor',
            phone: '(555) 555-5555',
            email: 'anna@mail.com',
            profileImage: annaProfile
        },
        {
            name: 'Scott Johnson',
            position: 'Client Manager',
            phone: '(555) 555-5555',
            email: 'scott@mail.com',
            profileImage: scottProfile
        },
        {
            name: 'Clair Meyers',
            position: 'Office Receptionist',
            phone: '(555) 555-5555',
            email: 'clair@mail.com',
            profileImage: clairProfile
        }
    ];

    console.log('test1');
    
    const styleChangeHandler = (event) => {
        setMemberStyle(event.target.value);
    };

    useEffect(() => {
        setFlipStyle(false);
        if (memberStyle === 'flip-card-style') {
            setFlipStyle(true);
        }
        return () => {
            setFlipStyle(false);
        }
    }, [memberStyle]);


    return(
        <Section id={props.id} className={memberStyle} sectionType={'c-grid__collapse--TeamList'} onAdjustSettings={styleChangeHandler} selectedStyle={memberStyle}>
            <div className={`c-team-section__container`}>
                {!flipStyle && members.map(member => <TeamMember memberInfo={member} key={Math.random().toFixed(4)} />)}
                {flipStyle && members.map(member => <TeamFlip memberInfo={member} key={Math.random().toFixed(4)} />)}
            </div>
        </Section> 
    );
};

export default Team;