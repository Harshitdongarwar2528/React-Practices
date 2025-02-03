import React from "react";

// function Car(props){
//     return(<li>
//         I am a {props.brand}
//     </li>)
// }
// function Garage(){
//     const cars=["ford","BMW" ,"Audi"];
//     return(
//         <>
//         <h1>Who lives in my Garage?</h1>
//         <ul>
//             {cars.map((car)=> <Car brand={car}/>)}
//         </ul>
//         </>
//     )
// }

//only this will show you warning thats why you have to use the keys
//keys

function Car(props){
    return <li> i am a {props.brand}</li>
}
function Garage(){
    const cars=[
        {id:1,brand:"ford"},
        {id:2,brand:"BMW"},
        {id:3,brand:"Audi"}
        
        
        
    ];
    return (
        <>
        <h1>Who lives in my Garage ?</h1>
        <ul>
            {cars.map((car)=><Car key ={car.id} brand ={car.brand}/>)}
        </ul>
        </>
    )
}
export default Garage