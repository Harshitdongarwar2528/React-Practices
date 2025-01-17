import React from "react";
import ReactDOM from "react-dom/client";
// import BiggestCar from "./props";
// import Car from "./class";
// import Bigcar from "./function";
// import Garage from "./compincomp";
// import MyCar from "./stateobj";
import Header from "./LifeCycle/Mounting";


// const myElement = (
//     <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//     </ul>
//    );
  
//    const root = ReactDOM.createRoot(document.getElementById('root'));
//    root.render(myElement)

// const myElement=(
//     <>
//     <p>i am a paragraph</p>
//     <p>welcome too react</p>
//     </>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement)

// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//  text = "Hello";
// }
// const myElement = <h1>{text}</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);