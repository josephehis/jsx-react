import React from 'react';
import Button from './Button';

const comment= (props)=>{
    //console.log(props, 'props')
    return(
        <div style={
            {marginBottom: '10px', width: '30%', display: 'Flex', alignItems: 'center', flexDirection: 'column', backgroundColor: 'pink', border: 'solid thin black'}
        }>
            <p>
            {props.Comment}
            </p>
            <Button/>
        </div>
    )
}

export default comment;