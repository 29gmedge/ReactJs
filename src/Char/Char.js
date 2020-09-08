import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '18px',
        margin: '10px',
        border: '2px solid red',
        textAlign: 'middle'
    };
    return(
        <div style={style} onClick={props.clicked}> 
        {props.character}
        </div>
    );
};

export default char;