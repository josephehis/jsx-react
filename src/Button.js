import React from 'react';

const Button= ()=>{
    return(
        <div>
            <button type = 'button'
            style={
                {backgroundColor: 'white', padding: '5px', marginRight: '20px', borderRadius: '10px', marginBottom: '2px'}
            }>
                Yes

            </button>

            <button type = 'button'
            style={
                {backgroundColor: 'white', padding: '5px', borderRadius: '5px',}
            }>
                No

            </button>
        </div>
    )
}

export default Button;