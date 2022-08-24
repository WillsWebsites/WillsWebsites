import React, { useRef, useEffect } from 'react';

import './TeamSelector.css';


const TeamSelector = (props, ref) => {

    const styleRef = useRef();

    useEffect(() => {
        console.log(styleRef.current.value)
        return
    }, [props.onChangeStyle]);

    return (
        <div className={'style-selector'}>
            <form>
                <select value={props.selectedStyle} onChange={props.onChangeStyle} ref={styleRef}>
                    <option value="default">Default</option>
                    <option value="flip-card-style">Flip Card</option>
                    <option value="grow">Grow</option>
                    <option value="draper">Draper</option>
                    <option value="shadow-hover">Shadow Hover</option>
                </select>
            </form>
        </div>
    );
};

export default React.forwardRef(TeamSelector);