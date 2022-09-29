import React from 'react';




import Comment from './Comment';
import Button from './Button';
const App = ()=>{
     return(
         <div style={
             {display: 'flex', flexDirection: 'column', alignItems: 'center'}
         }>
              
             
             <Comment
             Comment = 'Is this a good post?'/>
             
             <Comment 
             Comment='What is your aim of being here?'/>
             
             <Comment
            Comment='Are you sure you want this?'/>
              
         </div>
     )
}

export default App;
