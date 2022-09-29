
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));


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

    
// //return <div>hello world

//     //</div>
    
    


// //class App extends React.Component{
//     //render(){
//         //return <div>hello world</div>
    
//    // }
// //}

root.render(<App/>);

