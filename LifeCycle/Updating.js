import React from "react";
//Type 1 : getDerivedStateFromProps()
// class Middle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favouritecolor:"red"};
//     }
//     static getDerivedStateFromProps(props,state){
//         return{favouritecolor:props.favcol};
//     }
//     changeColor = () => {
//         this.setState({favouritecolor:"blue"})
//     }
//     render(){
//         return(
//             <>
//             <h1>My favourite color is {this.state.favouritecolor}</h1>
//             <button type="button" onClick={this.changeColor}>change Color</button>
//             </>
//         )
//     }
// }
// export default Middle

//TYPE 2: shouldComponentUpdate

// class Middle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favouritecolor:"red"};
//     }
//     shouldComponentUpdate(){
//         return true;
//     }
//     changeColor = () => {
//         this.setState({favouritecolor:"blue"});
//     };
//     render(){
//         return(
//             <>
//             <h1>My favourite color is {this.state.favouritecolor}</h1>
//             <button type="button" onClick={this.changeColor}>change color</button>
//             </>
//         )
//     }
// }
// export default Middle

//TYPE 3 :Render

// class Middle extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//     }
//     changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//     }
//     render() {
//     return (
//     <div>
//     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     <button type="button" onClick={this.changeColor}>Change
//    color</button>
//     </div>
//     );
//     }
//    }
//    export default Middle

//TYPE 4: getSnapShotBeforeUpdate

// class Middle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favouritecolor:"red"};
//     }

//     componentDidMount = ( ) =>{
//         setTimeout(()=> {
//             this.setState({favouritecolor:"yellow"})
//         },1000)
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState){
//         document.getElementById("div1").innerHTML=
//         "before the update the favourite was "+ prevState.favouritecolor;
//     }
//     componentDidUpdate(){
//         document.getElementById("div2").innerHTML=
//         "the updated favourite is "+ this.state.favouritecolor;
//     }
//     render(){
//         return(
//             <>
//             <h1>My favourite color is {this.state.favouritecolor}</h1>
//             <div id="div1"></div>
//             <div id="div2"></div>
//             </>
//         )
//     }
// }
// export default Middle

//TYPE 5: componentDidUpdate
class Middle extends React.Component {
    constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
    setTimeout(() => {
    this.setState({favoritecolor: "yellow"})
    }, 1000)
    }
    componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
    return (
    <div>
    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    <div id="mydiv"></div>
    </div>
    );
    }
   }
   export default Middle
   