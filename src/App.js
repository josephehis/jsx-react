import React from 'react';


// const returnJSX = ()=> 'hello world';


// function App(){
//     const name = ['Sharon', 'John'];
//     const nameObject = {
//         firstName: 'Veron',
//         LastName: 'John',
//     }

//     return(
//         <div>
//             <div className = 'divTag' styel={{backgroundColor: 'pink', width: '20%'}}>
                
//                    {/* {nameArray} */}
//                    {nameObject.firstName}{nameObject.lastName}
//                    hello world
                
//             </div>
//             <label htmlFor= 'myInput'>
//                    <input id= 'myInput'/>
//             </label>
//         </div>
//     )
// }

    
//return <div>hello world

    //</div>
    
    


//class App extends React.Component{
    //render(){
        //return <div>hello world</div>
    
   // }
//}

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