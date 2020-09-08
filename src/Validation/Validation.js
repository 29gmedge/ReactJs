import React from 'react';

const validation = (props) => {
let validationMessage ='Text long enough';

if(props.inputLenght <=5) {
    validationMessage ='Text Too short';
}
return (
    <div>
        <p>{validationMessage}</p>
    </div>
    );
};

export default validation;