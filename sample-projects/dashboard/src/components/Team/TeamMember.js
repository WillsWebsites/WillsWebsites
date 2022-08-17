import './TeamMember.css';

const TeamMember = props => {
    return(
        <div className={'c-team-section__member'} key={props.memberInfo.id}>
            <div className={'c-team-grid__section--developer'}>
                <img src={props.memberInfo.profileImage} alt='Profile'  className={'c-team-grid__img--developer'} />
                <div className={'c-team-member__info'}>
                    <h4>{props.memberInfo.name}</h4>
                    <h5>{props.memberInfo.position}</h5>
                    <p>
                        <i className="fa fa-phone c-team-info__icons" aria-hidden="true"></i>
                        <a href="tel:555555555">{props.memberInfo.phone}</a>
                    </p>
                     <p className="c-team-member__email">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <a href="mailto:mail@mail.com">{props.memberInfo.email}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;