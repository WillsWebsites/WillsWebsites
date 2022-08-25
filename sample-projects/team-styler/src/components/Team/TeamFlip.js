const TeamFlip = props => {
    return(
        <div className={"flip-card"}>
            <div className={"flip-card-inner"}>
                <div className={"flip-card-front"} style={{ backgroundImage: "url(" + props.memberInfo.profileImage + ")"}}>
                    <h2>{props.memberInfo.name}</h2>
                </div>
                <div className={"flip-card-back"}>
                    <div className={'c-team-member__info'}>
                        <h3>{props.memberInfo.position}</h3>
                        <p>
                            <i className="fa fa-phone c-team-info__icons" aria-hidden="true"></i>
                            <a href="tel:555555555">{props.memberInfo.phone}</a>
                        </p>
                        <p className="c-team-member__email">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <a href="mailto:mail@mail.com">{props.memberInfo.email}</a>
                        </p>
                    </div>
                    <a className={"flipCardButton"} href={'www.fmgsuite.com'}>View Profile</a>
                </div>
            </div>
        </div>
    );
};

export default TeamFlip;